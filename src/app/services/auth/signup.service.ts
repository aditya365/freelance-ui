import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  response: any = '';
  loggedIn: boolean;
  constructor(private http: Http, private alert: AlertService, private router: Router) { }
  async signUp(user) {
    console.log('User dev' + user.role)
    let url = 'https://freeintern.herokuapp.com/api/';
    if (user.role === 'Developer') {
      console.log('User dev' + user.role)
        url = url + 'developers';
    }
    if (user.role === 'Poster') {
      console.log('User po' + user.role)
        url = url + 'posters';
    }
    console.log(url);
    await this.http.post(url, user).
      subscribe( (data) => {
        console.log(data.json());
        this.response = data.json();
        if (data.status === 200) {
          console.log('user', JSON.stringify(this.response));
          this.alert.alert('Registration success', 'close');
          this.loggedIn = false;
          this.router.navigate(['dashboard']);
        } else if (data.status === 422){
          console.log("422 Error: " + data.json())
        }
      });
  }
}
