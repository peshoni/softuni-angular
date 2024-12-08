import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, merge, of } from 'rxjs';
import { inject } from '@angular/core';
import { GetUsersQuery, Order_By, User_Roles_Enum, UserFieldsFragment, Users_Bool_Exp, Users_Order_By } from '../../../../generated/graphql';
import { UsersService } from '../users.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { CustomDataSource } from '../../core/abstract-classes/datasource';
import { cloneDeep } from 'lodash';

/**
 * Data source for the UsersList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersListDataSource extends CustomDataSource<UserFieldsFragment, GetUsersQuery> {
  private readonly usersService: UsersService = inject(UsersService);
  private readonly order_by: Users_Order_By = { created_at: Order_By.Asc };
  private readonly condition: BehaviorSubject<Users_Bool_Exp> = new BehaviorSubject({});

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
      this.condition.getValue(),
      this.order_by
    );
  }

  filterBy(selectedOption: string, options: string[]) {
    const tempCondition = cloneDeep(this.condition.getValue());
    const andArray: Users_Bool_Exp[] = [];
    if (selectedOption !== options[0]) {
      andArray.push(
        { role: { _eq: selectedOption as User_Roles_Enum } }
      );
    }
    tempCondition._and = andArray
    this.condition.next(tempCondition);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserFieldsFragment[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update stream for the data-table to consume. 

      return merge(this.queryRef.valueChanges, this.condition, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap((_) => {
            this.loading.set(true);
          }),
          switchMap((fromWhere: ApolloQueryResult<GetUsersQuery> | Users_Bool_Exp | PageEvent | Sort) => { 
            let order: any = new Object({});

            if (this.sort?.active && this.sort.active.length > 0) {
              if (this.sort.direction.indexOf('sc') !== -1) {
                order[this.sort.active] = this.sort.direction
              } else {
                order = {}
              }
            } else {
              order = this.order_by;
            }

            if (Object.keys(fromWhere).indexOf('data') < 0) {
              return this.queryRef.refetch({
                limit: this.paginator.pageSize,
                offset: this.paginator.pageIndex * this.paginator.pageSize,
                condition: this.condition.getValue(),
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
