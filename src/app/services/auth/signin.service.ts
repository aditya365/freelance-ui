import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userLogin';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  response: any = '';
  loggedIn: boolean;

  constructor(private http: Http, private router: Router, private alert: AlertService) { }

  async signIn(user: User) {
    await this.http.post(`${environment.API_END}developers/login`, user).
      subscribe((data) => {
        console.log(data.json());
        this.response = data.json();
        console.log("Response status" + this.response)
        if (data.status === 200) {
          console.log('Success Developer');
          localStorage.setItem('user', JSON.stringify(this.response));
          this.loggedIn = true;
          localStorage.setItem('userRole', 'developer');
          this.alert.alert('You are a Developer!', 'Close');
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        }
      });
    if (!this.loggedIn) {
      await this.http.post(`${environment.API_END}Posters/login`, user).
        subscribe((data) => {
          console.log(data.json());
          this.response = data.json();
          if (data.status === 200) {
            localStorage.setItem('user', JSON.stringify(this.response));
            localStorage.setItem('userRole', 'poster');
            this.alert.alert('You are a Poster!', 'Close');
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 2000);
          }
        },
        (error) => {
          this.alert.alert('Username/Password is wrong!', 'X');
        }
      );
    }
  }

  async signOut() {
    var user = localStorage.getItem('user');
    await this.http.post(`${environment.API_END}developers/logout?access_token=${JSON.parse(user).id}`, {}).
      subscribe((data) => {
        console.log(data);
        localStorage.removeItem('user');
      });
    localStorage.removeItem('user');
  }
}
