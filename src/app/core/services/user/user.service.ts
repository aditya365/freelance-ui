import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('userRole') === "poster") {
      return this.http.get(`${environment.API_END}posters/${user.userId}?access_token=${user.id}`);
    } else {
      return this.http.get(`${environment.API_END}developers/${user.userId}?access_token=${user.id}`);
    }
  }
  getUser() {
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
