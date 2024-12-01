import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, from, merge, of } from 'rxjs';
import { GetProjectsQuery, Order_By, ProjectFieldsFragment, Projects_Bool_Exp, Projects_Order_By } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { EventEmitter, inject } from '@angular/core';
import { CustomDataSource } from '../../shared/abstract/datasource';

/**
 * Data source for the ProjectsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProjectsListDataSource extends CustomDataSource<ProjectFieldsFragment, GetProjectsQuery> {
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  private readonly order_by: Projects_Order_By = { created_at: Order_By.Asc };
  private readonly condition: Projects_Bool_Exp = {}; // attach filter logic here
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
      this.condition,
      this.order_by
    );
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */

  //[ApolloQueryResult<GetProjectsQuery>  , PageEvent, Sort]  
  //Observable<ApolloQueryResult<GetProjectsQuery['projects']> | null> 
  connect(): Observable<ProjectFieldsFragment[]> {//Observable<GetProjectsQuery['projects'] > 
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const dataMutations = [
        this.queryRef.valueChanges,
        // this.paginator.page,
        //  this.sort.sortChange,
        // this.forceReload
      ];

      return merge(...dataMutations, this.paginator.page, this.sort.sortChange, this.forceReload)
        .pipe(
          tap((_) => {
            this.loading.set(true);
          }),

          switchMap((fromWhere: ApolloQueryResult<GetProjectsQuery> | PageEvent | Sort | boolean) => {
            console.log(fromWhere);
            let order: any = new Object({});
            if (this.sort?.active && this.sort.active.length > 0) {
              const field = this.sort.active;
              this.sort.direction.indexOf('sc') !== -1
                ? (order[this.sort.active] = this.sort.direction)
                : (order = {});
            }

            if (this.queryRef && this.paginator && Object.keys(fromWhere).indexOf('data') < 0) {
              return from(this.queryRef.refetch({
                limit: this.paginator.pageSize,
                offset: this.paginator.pageIndex * this.paginator.pageSize,
                condition: {},
                orderBy: order,
              }));

            } else {
              return this.queryRef?.valueChanges ?? of();
            }
          }),
          map((response: ApolloQueryResult<GetProjectsQuery>) => { //: ApolloQueryResult<GetProjectsQuery>
            this.loading.set(response.loading);
            if (response.errors) {
              // console.log(response.errors);
              // console.log(response.data);
              const errorMessage = response.errors[0].message;
              // console.log(errorMessage);
              if (errorMessage.includes('query_root')) {
                console.log('query_root');
              }
              console.log(errorMessage);
              return [];
            }
            this.aggregateCount.set(response.data.projects_aggregate.aggregate?.count ?? 0);
            return response.data.projects;
          }
          )
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
