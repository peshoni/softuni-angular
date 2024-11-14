import { inject, Injectable } from '@angular/core';
import { GetUsersGQL, Users_Bool_Exp, Users_Order_By} from '../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly getUsersGQL: GetUsersGQL = inject(GetUsersGQL);

  /**
   * Gets page with the users data objects.
   * @param limit page size
   * @param offset from page
   * @param condition { @see Tickets_Bool_Exp }
   * @param orderBy { @see Tickets_Order_By }
   * @returns Reference of the current Apollo-angular QueryRef instance
   */
  getUsers(limit: number, offset: number, condition: Users_Bool_Exp, orderBy: Users_Order_By)   {
    return this.getUsersGQL.watch(
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
