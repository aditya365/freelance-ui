import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  get():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.API_END}skills`);
  }
}
