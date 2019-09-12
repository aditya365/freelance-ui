import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserBasic } from '../../models/user-basic.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<UserBasic>;
  public currentUser: Observable<UserBasic>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserBasic>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  getBasicUserDetails() {
    return localStorage.getItem('user');
  }

  public get currentUserValue(): UserBasic {
    return this.currentUserSubject.value;
  }

  getUsers(){
    return this.http.get(`${environment.API_END}users`);
  }

  getFullProfile(): Observable<any> {
    return this.http.get(`${environment.API_END}users/${this.currentUserValue.id}`);
  }

  updateProfile(profile): Observable<any> {
    return this.http.patch(`${environment.API_END}users/${this.currentUserValue.id}`, profile);
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
