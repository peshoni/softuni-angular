import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { LoginQuery, User_Roles_Enum, UserFieldsFragment } from '../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { first, throwError } from 'rxjs';
import { GlobalErrorHandler } from '../global-error-handler';
import { PathSegments } from '../app.routes';

export const authorizationGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> => {

  const authorizationService: AuthorizationService = inject(AuthorizationService);

  const router: Router = inject(Router);
  // this.login('admin', 'admin'); // admin 
  // this.login('krum20', 'krum20');  // reporter 
  // this.login('ivan4', 'ivan4');   //assignee  
  return authorizationService.loginAsPromise('admin', 'admin').then(
    (result: ApolloQueryResult<LoginQuery>) => {
      if (result.errors) {
        const message: string = result.errors[0]?.message;
        if (message.includes('x-hasura-admin-secret') || message.includes('x-hasura-access-key')) {
          /**
           * Notify { @see GlobalErrorHandler } and continue
           */
          throwError(() => new Error(message))
            .pipe(first())
            .subscribe();
        }
        authorizationService.currentUser.set(undefined);
        return router.navigate([]);
      }
      const user: UserFieldsFragment = result.data?.users[0];
      if (user) {
        authorizationService.currentUser.set(user);
        const roles = User_Roles_Enum;
        const segments: UrlSegment[] = route.url;

        // console.log(user.user_role.value, segments);

        switch (user.user_role.value) {
          case roles.Administrator:
            return true;
          case roles.Reporter:
          case roles.Assignee:
            // checks the `users` path with manually url insert
            if (segments[0].path === PathSegments.USERS) {
              if (segments.length === 3 && segments[2].path === user.id) { // only his own data is allowed
                return true;
              }
              return false;
            }
            return true; // for all other pages
          default:
            return false;
        }



      } else {
        authorizationService.currentUser.set(undefined);
        return router.navigate([]);
      }
    });
};
