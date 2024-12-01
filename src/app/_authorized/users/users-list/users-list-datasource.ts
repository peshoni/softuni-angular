import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { inject } from '@angular/core';
import { GetUsersQuery, Order_By, UserFieldsFragment, Users_Bool_Exp, Users_Order_By } from '../../../../generated/graphql';
import { UsersService } from '../users.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { CustomDataSource } from '../../shared/abstract/datasource';

/**
 * Data source for the UsersList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersListDataSource extends CustomDataSource<UserFieldsFragment, GetUsersQuery> {
  private readonly usersService: UsersService = inject(UsersService);
  private order_by: Users_Order_By = { created_at: Order_By.Asc };
  private condition: Users_Bool_Exp = {}; // attach filter logic here

  setPaginatorAndSort(paginator: MatPaginator, sort: MatSort) {
    this.paginator = paginator;
    this.sort = sort;
    this.initQueryRef();
  }

  initQueryRef() {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;

    this.queryRef = this.usersService.getUsers(
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
  connect(): Observable<UserFieldsFragment[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const dataMutations = [
        this.queryRef.valueChanges 
      ];

      return merge(...dataMutations, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap((_) => {
            console.log('loading....');/* this.loading.next(true)*/
          }),
          switchMap((fromWhere: ApolloQueryResult<GetUsersQuery> | PageEvent | Sort) => {
            console.log(fromWhere);
            let order: any = new Object({});
            if (this.sort?.active && this.sort.active.length > 0) {
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
          map((response: ApolloQueryResult<GetUsersQuery>) => {
            this.loading.set(response.loading);
            if (response.errors) {
              const errorMessage = response.errors[0].message;
              if (errorMessage.includes('query_root')) {
                console.log('query_root');
              }
              console.log(errorMessage);
              return [];
            }
            this.aggregateCount.set(response.data.users_aggregate.aggregate?.count ?? 0);
            return response.data.users;
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
