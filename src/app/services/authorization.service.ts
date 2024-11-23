import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LoginGQL, UserShortFieldsFragment } from '../../generated/graphql';
import { Router } from '@angular/router';
import { PathSegments } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly router: Router = inject(Router);
  private readonly loginGQL: LoginGQL = inject(LoginGQL);
  currentUser: WritableSignal<UserShortFieldsFragment> = signal<UserShortFieldsFragment>({} as UserShortFieldsFragment);

  constructor() {

    // this.login('admin', 'admin'); // admin
    // this.login('krum0', 'krum0');  // reporter 
    this.login('kristina1', 'kristina1');   //assignee
  }

  login(username: string, password: string) {
    this.loginGQL.fetch({ username, password }).subscribe(
      (response) => {
        this.currentUser.set(response.data.users[0]);
        const lastUrl = sessionStorage.getItem('lastUrl') ?? '';
        if (lastUrl.length > 0) {
          this.router.navigateByUrl(lastUrl); // will be checked in component if any
        } else {
          this.router.navigate([PathSegments.PROJECTS])
        }
      }
    )
  }

  logout() {
    this.currentUser.set({} as UserShortFieldsFragment);
  }

}
