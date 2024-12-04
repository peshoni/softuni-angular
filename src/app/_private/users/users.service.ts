import { inject, Injectable } from '@angular/core';
import { GetUserByIdGQL, GetUserByIdQuery, GetUserByRoleGQL, GetUserByRoleQuery, GetUsersGQL, InsertUserGQL, InsertUserMutation, UpdateUserGQL, UpdateUserMutation, User_Roles_Enum, Users_Bool_Exp, Users_Insert_Input, Users_Order_By, Users_Set_Input } from '../../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { MutationResult } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly getUsersGQL: GetUsersGQL = inject(GetUsersGQL);
  private readonly getUserByIdGQL: GetUserByIdGQL = inject(GetUserByIdGQL);
  private readonly getUserByRoleGQL: GetUserByRoleGQL = inject(GetUserByRoleGQL);
  private readonly insertUserGQL: InsertUserGQL = inject(InsertUserGQL);
  private readonly updateUserGQL: UpdateUserGQL = inject(UpdateUserGQL);

  /**
   * Gets page with the users data objects.
   * @param limit page size
   * @param offset from page
   * @param condition { @see Tickets_Bool_Exp }
   * @param orderBy { @see Tickets_Order_By }
   * @returns Reference of the current Apollo-angular QueryRef instance
   */
  getUsers(limit: number, offset: number, condition: Users_Bool_Exp, orderBy: Users_Order_By) {
    return this.getUsersGQL.watch(
      { limit, offset, condition, orderBy },
      {
        fetchPolicy: 'network-only',
        partialRefetch: true,
        errorPolicy: 'all',
        pollInterval: 20 * 1000,
      }
    );
  }

  getUserById(id: string): Observable<ApolloQueryResult<GetUserByIdQuery>> {
    return this.getUserByIdGQL.fetch({ id }, {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all'
    });
  }

  getUserByRole(role: User_Roles_Enum): Observable<ApolloQueryResult<GetUserByRoleQuery>> {
    return this.getUserByRoleGQL.fetch({ role }, {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    });
  }

  insertUser(input: Users_Insert_Input): Observable<MutationResult<InsertUserMutation>> {
    return this.insertUserGQL.mutate({ input });
  }

  updateUserById(id: string, input: Users_Set_Input): Observable<MutationResult<UpdateUserMutation>> {
    return this.updateUserGQL.mutate({ id, input });
  }
}
