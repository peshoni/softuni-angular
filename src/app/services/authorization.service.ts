import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LoginGQL, LoginQuery, UserShortFieldsFragment } from '../../generated/graphql';
import { Router } from '@angular/router';
import { PathSegments } from '../app.routes';
import { ApolloQueryResult } from '@apollo/client/core';
import { firstValueFrom, Observable } from 'rxjs';

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

  logout() {
    this.currentUser.set(undefined);
    //clear storage data..
    this.router.navigate([PathSegments.LOGIN]);
  }
}
