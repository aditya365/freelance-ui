import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService {

  constructor(private http: Http) { }

  checkEmailStatus(email: string) {
    return this.http.post(`${environment.API_END}user/checkemail`, email);
  }
}
