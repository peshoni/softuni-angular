import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { LoginQuery } from '../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';

export const authorizationGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  // const pathSegments: string[] | undefined = state.url.split('/');
  // console.log(route)
  // console.log(pathSegments);
  // console.log(authorizationService.currentUser());

  // this.login('admin', 'admin'); // admin 
  // this.login('krum0', 'krum0');  // reporter 
  // this.login('kristina1', 'kristina1');   //assignee  
  return authorizationService.loginAsPromise('kristina1', 'kristina1').then(
    (result: ApolloQueryResult<LoginQuery>) => {
      if (result.data.users[0]) {
        authorizationService.currentUser.set(result.data.users[0])
        return true;
      } else {
        authorizationService.currentUser.set(undefined)
        return false;
      }
    });
};
