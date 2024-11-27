import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { LoginQuery } from '../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { first, throwError } from 'rxjs';
import { GlobalErrorHandler } from '../global-error-handler';

export const authorizationGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> => {
  const authorizationService: AuthorizationService = inject(AuthorizationService); 
 
  const router: Router = inject(Router); 
  // this.login('admin', 'admin'); // admin 
  // this.login('krum0', 'krum0');  // reporter 
  // this.login('kristina1', 'kristina1');   //assignee  
  return authorizationService.loginAsPromise('kristina1', 'kristina1').then(
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
        authorizationService.currentUser.set(undefined)
        return router.navigate([])
      }

      if (result.data?.users[0]) {
        authorizationService.currentUser.set(result.data.users[0])
        return true;
      } else {
        authorizationService.currentUser.set(undefined);
        return router.navigate([])
      }
    });
};
