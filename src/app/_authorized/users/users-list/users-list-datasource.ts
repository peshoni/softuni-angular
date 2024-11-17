import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, merge, combineLatest, of } from 'rxjs';
import { inject, signal } from '@angular/core';
import { GetUsersQuery, Order_By, Users, Users_Order_By } from '../../../../generated/graphql';
import { UsersService } from '../users.service';
import { QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';

/**
 * Data source for the UsersList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersListDataSource extends DataSource<GetUsersQuery['users']> {
  private readonly usersService: UsersService = inject(UsersService);
  elementsOnPage = signal(0);
  loading = signal(true);
  paginator?: MatPaginator;
  sort?: MatSort;
  queryRef?: QueryRef<GetUsersQuery>;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Users[] | any> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const limit: number = this.paginator.pageSize;
      const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
      const order_by: Users_Order_By = { id: Order_By.Asc };
      this.queryRef = this.usersService.getUsers(
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
      // return 

      combineLatest([this.queryRef.valueChanges, this.paginator.page, this.sort.sortChange]).pipe(
        tap(_ => {
          console.log(_)
        }),


      )

      return merge(this.queryRef.valueChanges, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap((_) => {
            console.log('loading....')/* this.loading.next(true)*/
          }),
          switchMap((fromWhere: ApolloQueryResult<GetUsersQuery> | PageEvent | Sort) => {
              console.log(fromWhere);
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
          map((response) => {
            console.log(response.data);
            this.loading.set(response.loading);
            if (response.errors) {
              console.log(response.errors);
              console.log(response.data);
              const errorMessage = response.errors[0].message;
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
            this.elementsOnPage.set(response.data.users_aggregate.aggregate?.count ?? 0);
            return response.data.users;// as GetProjectsQuery['projects'];
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
