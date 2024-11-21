import { inject } from '@angular/core';
import { Router, type ActivatedRouteSnapshot, type CanActivateFn, type RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { PathSegments } from '../app.routes';

export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  const pathSegments: string[] | undefined = state.url.split('/');
  if (authorizationService.currentUser().id && pathSegments[1]?.length > 0) { 
    if (pathSegments[1] === PathSegments.AUTHORIZE) {
      return inject(Router).navigate([PathSegments.PROJECTS])
    } else {
      return true;
    }
  } else {
    console.log('auth..')
    //inject(Router).navigate([PathSegments.AUTHORIZE]);
    return false;
  }
};
