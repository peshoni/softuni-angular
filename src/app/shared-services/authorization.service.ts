import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly credential: BehaviorSubject<any> = new BehaviorSubject(null);
  $credential = this.credential.asObservable();
  constructor() { }

  setCredentials(credential: any) {
    this.credential.next(credential);
  }
  getCredential() {
    return this.credential.getValue();
  }
}
