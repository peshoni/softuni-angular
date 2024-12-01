import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';
import { inject } from '@angular/core';
import { GetTicketsQuery, Order_By, TicketFieldsFragment, Tickets_Bool_Exp, Tickets_Order_By } from '../../../../generated/graphql';
import { TicketsService } from '../tickets.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { CustomDataSource } from '../../shared/abstract/datasource';

/**
 * Data source for the TicketsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TicketsListDataSource extends CustomDataSource<TicketFieldsFragment, GetTicketsQuery> {
  private readonly ticketsService: TicketsService = inject(TicketsService);
  private order_by: Tickets_Order_By = { created_at: Order_By.Asc };
  private condition: Tickets_Bool_Exp = {}; // attach filter logic here

  setPaginatorAndSort(paginator: MatPaginator, sort: MatSort) {
    this.paginator = paginator;
    this.sort = sort;
    this.initQueryRef();
  }

  initQueryRef() {
    const limit: number = this.paginator.pageSize;
    const offset: number = this.paginator.pageIndex * this.paginator.pageSize;  

    this.queryRef = this.ticketsService.getTickets(
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
  connect(): Observable<TicketFieldsFragment[]> {
    if (this.paginator && this.sort) {

      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const dataMutations = [
        this.queryRef.valueChanges,
        //  this.paginator.page,
        // this.sort.sortChange,
      ];


      return merge(this.queryRef.valueChanges, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap((_) => {
            console.log('loading....');/* this.loading.next(true)*/
          }),
          switchMap((fromWhere: ApolloQueryResult<GetTicketsQuery> | PageEvent | Sort) => {
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
          map((response: ApolloQueryResult<GetTicketsQuery>) => {
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

            this.aggregateCount.set(response.data.tickets_aggregate.aggregate?.count ?? 0);
            return response.data.tickets;// as GetProjectsQuery['projects'];
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
