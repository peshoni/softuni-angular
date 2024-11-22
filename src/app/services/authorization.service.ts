import { Injectable, signal, WritableSignal } from '@angular/core';
import { Users, UserShortFieldsFragment } from '../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  currentUser: WritableSignal<UserShortFieldsFragment> = signal<UserShortFieldsFragment>({} as UserShortFieldsFragment);

  constructor() {
    let currentUser = {
      id: "c1abdd24-1ebe-498f-a407-115ded9bd0ef", 
      name: 'name',
      family: 'family',
      user_role:{
        content:'administrator'
      }
      //name: 'Name', family: 'Family', username: 'username'
    } as Users;
    this.currentUser.set(currentUser);

  }

}
