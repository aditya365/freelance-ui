import {
  Injectable
} from '@angular/core';
import {
  Http
} from '@angular/http';
import {
  environment
} from 'src/environments/environment';
import {
  Observable
} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) {}

  search(terms: Observable < string > ) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get(`${environment.API_END}skills?filter={"where": {"skill": {"regexp": "^${term}/i"}}}`)
      .map(res => res.json());
  };
  searchSkills(search) {
    return this.http.post(`${environment.API_END}searchSkill`, {
      search
    });
  };
  getRandomDeveloperProfile() {
    return this.http.get(`${environment.API_END}developers`);
  }
}
