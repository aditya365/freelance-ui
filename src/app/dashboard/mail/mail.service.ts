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
  createMail(mail: Mail) {
    var user = localStorage.getItem('user');
    return this.http.post(`${environment.API_END}inboxes?access_token=${JSON.parse(user).id}`,mail)
  }


  getInbox(): Observable<Mail[]> {
    var user = localStorage.getItem('user');
    return this.http.get<Mail[]>(`${environment.API_END}inboxes/received?access_token=${JSON.parse(user).id}`);
  }

  getInboxById(id: any): Observable<Mail> {
    var user = localStorage.getItem('user');
    return this.http.get<Mail>(`${environment.API_END}inboxes/received/${id}?access_token=${JSON.parse(user).id}`);
  }

  getSendMails(): Observable<Mail[]> {
    var user = localStorage.getItem('user');
    return this.http.get<Mail[]>(`${environment.API_END}inboxes/sent?access_token=${JSON.parse(user).id}`);
  }

  getSentById(id:any):Observable<Mail>{
    console.log(id + "in service");
    var user = localStorage.getItem('user');
    return this.http.get<Mail>(`${environment.API_END}inboxes/sent/${id}?access_token=${JSON.parse(user).id}`);
  }
}
