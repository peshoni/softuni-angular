import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly credential: BehaviorSubject<any> = new BehaviorSubject(null);
  $credential = this.credential.asObservable();
  
  // TODO 
  currentUser: Users = {
    name: 'Name', family: 'Family', username: 'username'
  } as Users;

  constructor() {
    this.setCredentials("fakeCredential")
  }

  setCredentials(credential: any) {
    this.credential.next(credential);
  }

  getCredential() {
    return this.credential.getValue();
  }
}
