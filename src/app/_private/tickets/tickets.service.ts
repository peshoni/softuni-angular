import { inject, Injectable } from '@angular/core';
import { DeleteLogGQL, DeleteLogMutation, GetTicketByIdGQL, GetTicketByIdQuery, GetTicketsGQL, InsertLogGQL, InsertLogMutation, InsertTicketGQL, InsertTicketMutation, Ticket_Logs_Insert_Input, Ticket_Logs_Set_Input, Tickets_Bool_Exp, Tickets_Insert_Input, Tickets_Order_By, Tickets_Set_Input, UpdateLogGQL, UpdateLogMutation, UpdateProjectByIdMutation, UpdateTicketGQL } from '../../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class TicketsService {
  private readonly getTicketsGQL: GetTicketsGQL = inject(GetTicketsGQL);
  private readonly getTicketByIdGQL: GetTicketByIdGQL = inject(GetTicketByIdGQL);
  private readonly insertTicketGQL: InsertTicketGQL = inject(InsertTicketGQL);
  private readonly updateTicketGQL: UpdateTicketGQL = inject(UpdateTicketGQL);

  private readonly insertLogGQL: InsertLogGQL = inject(InsertLogGQL);
  private readonly updateLogGQL: UpdateLogGQL = inject(UpdateLogGQL);
  private readonly deleteLogGQL: DeleteLogGQL = inject(DeleteLogGQL);

  /**
   * Gets page with the tickets data objects.
   * @param limit page size
   * @param offset from page
   * @param condition { @see Tickets_Bool_Exp }
   * @param orderBy { @see Tickets_Order_By }
   * @returns Reference of the current Apollo-angular QueryRef instance
   */
  getTickets(limit: number, offset: number, condition: Tickets_Bool_Exp, orderBy: Tickets_Order_By) {
    return this.getTicketsGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 20 * 1000,
      }
    );
  }

  getTicketById(id: string): Observable<ApolloQueryResult<GetTicketByIdQuery>> {
    return this.getTicketByIdGQL.fetch({ id }, {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
      partialRefetch: true
    });
  }

  insertTicket(input: Tickets_Insert_Input): Observable<MutationResult<InsertTicketMutation>> {
    return this.insertTicketGQL.mutate({ input });
  }

  updateTicketById(id: string, input: Tickets_Set_Input): Observable<MutationResult<UpdateProjectByIdMutation>> {
    return this.updateTicketGQL.mutate({ id, input });
  }

  insertLog(input: Ticket_Logs_Insert_Input): Observable<MutationResult<InsertLogMutation>> {
    return this.insertLogGQL.mutate({ input }, { errorPolicy: 'all' });
  }

  updateLog(id: string, input: Ticket_Logs_Set_Input): Observable<MutationResult<UpdateLogMutation>> {
    return this.updateLogGQL.mutate({ id, input }, { errorPolicy: 'all' });
  }

  deleteLog(id: string): Observable<MutationResult<DeleteLogMutation>> {
    return this.deleteLogGQL.mutate({ id }, { errorPolicy: 'all' });
  }
}
