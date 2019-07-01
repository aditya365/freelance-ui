import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    const auth = localStorage.getItem('user');
    if (auth === null ) {
      return false;
    } else {
      return true;
    }
  }
}
