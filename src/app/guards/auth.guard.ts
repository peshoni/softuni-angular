import { inject } from '@angular/core';
import { Router, type ActivatedRouteSnapshot, type CanActivateFn, type RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../shared-services/authorization.service';

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  const pathSegments: string[] | undefined = state.url.split('/');
  if (authorizationService.getCredential() && pathSegments[1]?.length > 0) {
    return true;
  } else {
    inject(Router).navigate(['authorize']);
    return false;
  }
};
