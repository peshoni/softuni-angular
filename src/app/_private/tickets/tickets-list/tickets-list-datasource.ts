import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, merge, of } from 'rxjs';
import { inject } from '@angular/core';
import { GetTicketsQuery, Order_By, Ticket_Statuses_Enum, TicketFieldsFragment, Tickets_Bool_Exp, Tickets_Order_By } from '../../../../generated/graphql';
import { TicketsService } from '../tickets.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { CustomDataSource } from '../../core/abstract-classes/datasource';
import { cloneDeep } from 'lodash';
import { isNullOrUndefined } from 'is-what';

/**
 * Data source for the TicketsList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TicketsListDataSource extends CustomDataSource<TicketFieldsFragment, GetTicketsQuery> {
  private readonly ticketsService: TicketsService = inject(TicketsService);
  private readonly order_by: Tickets_Order_By = { created_at: Order_By.Asc };
  private readonly condition: BehaviorSubject<Tickets_Bool_Exp> = new BehaviorSubject({});

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
      this.condition.getValue(),
      this.order_by
    );
  }

  filterByStatus(selectedOption: string, options: string[]) {
    const tempCondition = cloneDeep(this.condition.getValue());
    //{ role: { _eq: selectedOption as User_Roles_Enum } }
    const andArray: Tickets_Bool_Exp[] = [];

    if (tempCondition._and) {
      tempCondition._and = tempCondition._and?.filter(e => isNullOrUndefined(e.status)); // remove old status filtration
    } else {
      tempCondition._and = andArray;
    }
    if (selectedOption === options[0]) {
      tempCondition._and = tempCondition._and?.filter(e => e.status !== null /*&& e.owner_id !==null*/);
    } else {
      tempCondition._and.push(
        { status: { _eq: selectedOption as Ticket_Statuses_Enum } }
      );
    }
    this.condition.next(tempCondition);
  }

  filterByReporter(reporterId: string | null) { 
    const tempCondition = cloneDeep(this.condition.getValue());
    const andArray: Tickets_Bool_Exp[] = [];
    if (tempCondition._and) {
      tempCondition._and = tempCondition._and?.filter(e => e.status);
    } else {
      tempCondition._and = andArray;
    }
    if (reporterId) {
      tempCondition._and.push(
        { reporter_id: { _eq: reporterId } }
      );
    } else {
      tempCondition._and = tempCondition._and?.filter(e => e.status !== null && e.reporter_id !== null);
    }
    this.condition.next(tempCondition);
  }

  filterByAssignee(assigneeId: null) { 
    const tempCondition = cloneDeep(this.condition.getValue());
    const andArray: Tickets_Bool_Exp[] = [];
    if (tempCondition._and) {
      tempCondition._and = tempCondition._and?.filter(e => e.status);
    } else {
      tempCondition._and = andArray;
    }
    if (assigneeId) {
      tempCondition._and.push(
        { assignee_id: { _eq: assigneeId } }
      );
    } else {
      tempCondition._and = tempCondition._and?.filter(e => e.status !== null && e.assignee_id !== null);
    }
    this.condition.next(tempCondition);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TicketFieldsFragment[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update  stream for the data-table to consume. 

      return merge(this.queryRef.valueChanges, this.condition, this.paginator.page, this.sort.sortChange)
        .pipe(
          tap((_) => {
            this.loading.set(true);
          }),
          switchMap((fromWhere: ApolloQueryResult<GetTicketsQuery> | Tickets_Bool_Exp | PageEvent | Sort) => { 
            let order: any = new Object({});
            if (this.sort?.active && this.sort.active.length > 0) {
              const field = this.sort.active;
              this.sort.direction.indexOf('sc') !== -1
                ? (order[this.sort.active] = this.sort.direction)
                : (order = {});
            } else {
              order = this.order_by;
            }

            if (this.queryRef && this.paginator && Object.keys(fromWhere).indexOf('data') < 0) {
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
          map((response: ApolloQueryResult<GetTicketsQuery>) => {
            this.loading.set(response.loading);
            if (response.errors) {
              console.log(response.errors);
              console.log(response.data);
              const errorMessage = response.errors[0].message;
              console.log(errorMessage);
              if (errorMessage.includes('query_root')) {
                console.log('query_root');
              }
              console.log(errorMessage);
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
