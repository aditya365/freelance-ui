import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DevelopersFilter } from '../../models/developer-filter'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  private filtersSource = new BehaviorSubject<DevelopersFilter>({ skills: [], minFee: 0, maxFee: 10000 });
  private filters = this.filtersSource.asObservable();
  constructor(private http:HttpClient) { }

  getDevelopers():Observable<any[]>{
    return this.http.get<any[]>(`${environment.API_END}developers`);
  }

  updateFilters(filters: DevelopersFilter) {
    this.filtersSource.next(filters);
  }
}
