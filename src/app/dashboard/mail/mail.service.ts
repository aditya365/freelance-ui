import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './models/mail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  getInbox(): Observable<Mail[]> {
    var user = localStorage.getItem('user');
    return this.http.get<Mail[]>(`${environment.API_END}inboxes/received?access_token=${JSON.parse(user).id}`);
  }
}
