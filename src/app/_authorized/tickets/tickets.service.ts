import { inject, Injectable } from '@angular/core';
import { GetTicketsGQL, Tickets_Bool_Exp, Tickets_Order_By } from '../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private readonly getTicketsGQL: GetTicketsGQL = inject(GetTicketsGQL);

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
}
