import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { User_Roles_Enum, UserShortFieldsFragment } from '../../generated/graphql';
import { PathSegments } from '../app.routes';

export const authorizationGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> => {
  const authorizationService: AuthorizationService = inject(AuthorizationService);
  const router: Router = inject(Router);

  const userShortFieldsFragment: UserShortFieldsFragment | null = authorizationService.currentUser() ?? authorizationService.getFragmentFromSessionStorage();
  if (userShortFieldsFragment) {
    const roles = User_Roles_Enum;
    const segments: UrlSegment[] = route.url;
    authorizationService.currentUser.set(userShortFieldsFragment);

    switch (userShortFieldsFragment.user_role.value) {
      case roles.Administrator:
        return true;
      case roles.Reporter:
      case roles.Assignee:
        // checks the `users` path with manually url insert
        if (segments[0].path === PathSegments.USERS) {
          if (segments.length === 3 && segments[2].path === userShortFieldsFragment.id) { // only his own data is allowed
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
};
