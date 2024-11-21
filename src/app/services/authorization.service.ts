import { Injectable, signal, WritableSignal } from '@angular/core';
import { Users } from '../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  currentUser: WritableSignal<Users> = signal<Users>({} as Users);

  constructor() {
    let currentUser = {
      id: "c1abdd24-1ebe-498f-a407-115ded9bd0ef",
      username: 'username',
      name: 'name',
      family: 'family'
      //name: 'Name', family: 'Family', username: 'username'
    } as Users;
    this.currentUser.set(currentUser);

  }

}
