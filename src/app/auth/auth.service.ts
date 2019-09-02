import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AlertService } from '../services/alert/alert.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ISignUp } from './signup.model';
import ISignin from './signin/signin.model';
import { UserBasic } from '../core/models/user-basic.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  private currentUserSubject: BehaviorSubject<UserBasic>;
  public currentUser: Observable<UserBasic>;

  constructor(private http: HttpClient, private alertService: AlertService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserBasic>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public signUp(signupModel: ISignUp) {
    this.http.post(environment.API_END + 'auth/signup', signupModel, { observe: 'response' }).subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response.body));
      this.storeToken(response.headers.get('X-Token'));
      this.isLoggedIn = true;
      this.redirect();
    }, (error: any) => {
      this.alertService.alert(error.message, "Close!");
    });
  }

  public get currentUserValue(): UserBasic {
    return this.currentUserSubject.value;
  }

  public signIn(signinModel: ISignin) {
    this.http.post(environment.API_END + "auth/signin", signinModel, { observe: 'response' }).subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response.body));
      this.storeToken(response.headers.get('X-Token'));
      this.isLoggedIn = true;
      this.currentUserSubject.next(response.body);
      this.redirect();
    }, (error: any) => {
      this.alertService.alert(error.message, "Close!");
    });
  }

  public signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  private storeToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    return localStorage.getItem('token');
  }

  private redirect() {
    const role = localStorage.getItem('user');
    this.router.navigate(["/dashboard"]);
  }
}
