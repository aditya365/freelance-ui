import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  // getBasicUserDetails(): Observable<any> {
  //   return JSON.parse(localStorage.getItem('user'));
  // }
  getBasicUserDetails() {
    return localStorage.getItem('user');
  }

  async signOut() {
    var user = localStorage.getItem('user');
    await this.http.post(`${environment.API_END}developers/logout?access_token=${JSON.parse(user).id}`, {}).
      subscribe((data) => {
        localStorage.removeItem('user');
      });
    localStorage.removeItem('user');
  }
}
