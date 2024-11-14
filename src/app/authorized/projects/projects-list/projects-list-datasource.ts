import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { GetProjectsQuery, Order_By, Projects_Order_By } from '../../../../generated/graphql';
import { QueryRef } from 'apollo-angular';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { signal } from '@angular/core';

/**
 * Data source for the ProjectsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProjectsListDataSource extends DataSource<GetProjectsQuery["projects"]> {
  elementsOnPage= signal(0);
  data$?: Observable<GetProjectsQuery['projects']>;
  paginator?: MatPaginator;
  sort?: MatSort;
  queryRef?: QueryRef<GetProjectsQuery>;

  constructor(private readonly projectsService: ProjectsService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */

  //[ApolloQueryResult<GetProjectsQuery>  , PageEvent, Sort]  
  //Observable<ApolloQueryResult<GetProjectsQuery['projects']> | null> 
  connect(): GetProjectsQuery['projects'] | any {//Observable<GetProjectsQuery['projects'] >
    if (this.paginator && this.sort) {
      const limit: number = this.paginator.pageSize;
      const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
      const order_by: Projects_Order_By = { id: Order_By.Asc };
      this.queryRef = this.projectsService.getProjects(
        limit,
        offset,
        {},
        order_by
      );
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const dataMutations = [
        this.queryRef.valueChanges,
        //  this.paginator.page,
        // this.sort.sortChange,
      ];

      return merge(this.queryRef.valueChanges, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap(() => console.log('loading....')/* this.loading.next(true)*/),
          switchMap((fromWhere: ApolloQueryResult<GetProjectsQuery> | PageEvent | Sort) => {
            //   console.log(fromWhere);
            let order: any = new Object({});
            if (this.sort?.active && this.sort.active.length > 0) {
              const field = this.sort.active;
              this.sort.direction.indexOf('sc') !== -1
                ? (order[this.sort.active] = this.sort.direction)
                : (order = {});
            }

            if (this.queryRef && this.paginator && Object.keys(fromWhere).indexOf('data') < 0) {
              return this.queryRef.refetch({
                limit: this.paginator.pageSize,
                offset: this.paginator.pageIndex * this.paginator.pageSize,
                condition: {},
                orderBy: order,
              });
            } else {
              return this.queryRef?.valueChanges ?? of();
            }
          }),
          map(({ data, loading, errors }) => {
            console.log(data);
            // this.loading.next(loading);
            console.log('stop loading');
            if (errors) {
              console.log(errors);
              console.log(data);
              const errorMessage = errors[0].message;
              console.log(errorMessage);
              if (errorMessage.includes('query_root')) {
                console.log('query_root');
              }
              // this.counter.next(0);
              console.log(errorMessage);
              //this.currentPageData.next([]);
              // throw Error(errorMessage);
              return [];
            }
            this.elementsOnPage.set(data.projects_aggregate.aggregate?.count ?? 0);
            return data.projects;// as GetProjectsQuery['projects'];
          }
          )
        );

    } else {
      //  return of([] as any as GetProjectsQuery['projects'][]);
      throw Error('Please set the paginator and sort on the data source before connecting.');
      //return of([]);
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }
}
