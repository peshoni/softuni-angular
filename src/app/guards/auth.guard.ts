import { inject } from '@angular/core';
import { Router, type ActivatedRouteSnapshot, type CanActivateFn, type RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  const pathSegments: string[] | undefined = state.url.split('/');
  if (authorizationService.getCredential() && pathSegments[1]?.length > 0) {

    if (pathSegments[1] === 'authorize') {
      return inject(Router).navigate(['projects'])
    } else {
      return true;
    }
  } else {
    inject(Router).navigate(['authorize']);
    return false;
  }
};
