import { inject, Injectable } from '@angular/core';
import { GetTicketByIdGQL, GetTicketByIdQuery, GetTicketsGQL, InsertTicketGQL, InsertTicketMutation, Tickets_Bool_Exp, Tickets_Insert_Input, Tickets_Order_By, Tickets_Set_Input, UpdateProjectByIdMutation, UpdateTicketGQL } from '../../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class TicketsService {
  private readonly getTicketsGQL: GetTicketsGQL = inject(GetTicketsGQL);
  private readonly getTicketByIdGQL: GetTicketByIdGQL = inject(GetTicketByIdGQL);
  private readonly insertTicketGQL: InsertTicketGQL = inject(InsertTicketGQL);
  private readonly updateTicketGQL: UpdateTicketGQL = inject(UpdateTicketGQL);

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
        pollInterval: 5 * 1000,
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
}
