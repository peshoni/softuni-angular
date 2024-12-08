import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, from, merge, of } from 'rxjs';
import { GetProjectsQuery, Order_By, Project_Statuses_Enum, ProjectFieldsFragment, Projects_Bool_Exp, Projects_Order_By } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { EventEmitter, inject } from '@angular/core';
import { CustomDataSource } from '../../core/abstract-classes/datasource';
import { cloneDeep } from 'lodash';

/**
 * Data source for the ProjectsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProjectsListDataSource extends CustomDataSource<ProjectFieldsFragment, GetProjectsQuery> {
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  private readonly order_by: Projects_Order_By = { created_at: Order_By.Desc };
  private readonly condition: BehaviorSubject<Projects_Bool_Exp> = new BehaviorSubject({});
  forceReload: EventEmitter<true> = new EventEmitter();

  setPaginatorAndSort(paginator: MatPaginator, sort: MatSort) {
    this.paginator = paginator;
    this.sort = sort;
    this.initQueryRef();
  }

  initQueryRef() {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;

    this.queryRef = this.projectsService.getProjects(
      limit,
      offset,
      this.condition.getValue(),
      this.order_by
    );
  }

  filterByStatus(selectedOption: string, options: string[]) {
    const tempCondition = cloneDeep(this.condition.getValue());
    //{ role: { _eq: selectedOption as User_Roles_Enum } }
    const andArray: Projects_Bool_Exp[] = [];

    if (tempCondition._and) {
      tempCondition._and = tempCondition._and?.filter(e => e.owner_id);
    } else {
      tempCondition._and = andArray;
    }

    if (selectedOption === options[0]) {
      tempCondition._and = tempCondition._and?.filter(e => e.status !== null && e.owner_id !== null);
    } else {
      tempCondition._and.push(
        { status: { _eq: selectedOption as Project_Statuses_Enum } }
      );
    }
    this.condition.next(tempCondition);
  }

  filterByOwner(ownerId: string | null) { 
    const tempCondition = cloneDeep(this.condition.getValue());
    const andArray: Projects_Bool_Exp[] = [];

    if (tempCondition._and) {
      tempCondition._and = tempCondition._and?.filter(e => e.status);
    } else {
      tempCondition._and = andArray;
    }
    if (ownerId) {
      tempCondition._and.push(
        { owner_id: { _eq: ownerId } }
      );
    } else {
      tempCondition._and = tempCondition._and?.filter(e => e.status !== null && e.owner_id !== null);
    }
    this.condition.next(tempCondition);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProjectFieldsFragment[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update stream for the data-table to consume.  
      return merge(this.queryRef.valueChanges, this.condition, this.paginator.page, this.sort.sortChange/*, this.forceReload*/)
        .pipe(
          tap((_) => {
            this.loading.set(true);
          }),
          switchMap((fromWhere: ApolloQueryResult<GetProjectsQuery> | Projects_Bool_Exp | PageEvent | Sort) => { 
            let order: any = new Object({});
            if (this.sort?.active && this.sort.active.length > 0) {
              const field: keyof ProjectFieldsFragment = this.sort.active as any;
              this.sort.direction.indexOf('sc') !== -1
                ? (order[field] = this.sort.direction)
                : (order = {});
            } else {
              order = this.order_by;
            }

            if (this.queryRef && this.paginator && Object.keys(fromWhere).indexOf('data') < 0) {
              return from(this.queryRef.refetch({
                limit: this.paginator.pageSize,
                offset: this.paginator.pageIndex * this.paginator.pageSize,
                condition: this.condition.getValue(),
                orderBy: order,
              }));

            } else {
              return this.queryRef?.valueChanges ?? of();
            }
          }),
          map((response: ApolloQueryResult<GetProjectsQuery>) => {  
            this.loading.set(response.loading);
            if (response.errors) {
              const errorMessage = response.errors[0].message; 
              if (errorMessage.includes('query_root')) {
                console.log('query_root');
              } 
              return [];
            }
            this.aggregateCount.set(response.data.projects_aggregate.aggregate?.count ?? 0);
            return response.data.projects;
          })
        );


    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }
}
