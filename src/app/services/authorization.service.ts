import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LoginGQL, LoginQuery, UserShortFieldsFragment } from '../../generated/graphql';
import { Router } from '@angular/router';
import { PathSegments } from '../app.routes';
import { ApolloQueryResult } from '@apollo/client/core';
import { firstValueFrom, Observable } from 'rxjs';

export const USER_KEY = 'user-fragment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly router: Router = inject(Router);
  private readonly loginGQL: LoginGQL = inject(LoginGQL);
  currentUser: WritableSignal<UserShortFieldsFragment | undefined> = signal(undefined);

  login(username: string, password: string): Observable<ApolloQueryResult<LoginQuery>> {
    return this.loginGQL.fetch({ username, password });
  }

  loginAsPromise(username: string, password: string): Promise<ApolloQueryResult<LoginQuery>> {
    return firstValueFrom(this.loginGQL.fetch({ username, password }));
  }

  getFragmentFromSessionStorage(): UserShortFieldsFragment | null {
    const str = sessionStorage.getItem(USER_KEY);
    if (str) {
      const fragment: UserShortFieldsFragment = JSON.parse(str);
      return fragment;
    } else {
      return null;
    }
  }

  setCurrentUserAndNavigate(userShortFieldsFragment: UserShortFieldsFragment) {
    this.currentUser.set(userShortFieldsFragment);
    sessionStorage.setItem(USER_KEY, JSON.stringify(userShortFieldsFragment));
    this.router.navigate([PathSegments.PROJECTS]);
  }

  logout() {
    this.currentUser.set(undefined);
    sessionStorage.removeItem(USER_KEY);
    this.router.navigate([PathSegments.LOGIN]);
  }
}
