import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { ObserversModule } from '@angular/cdk/observers';
import { Skill } from 'src/app/core/models/skill.model';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  skills: Skill[];
  query$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.query$)
      .subscribe(results => {
        this.skills = results;
      });
  }

  ngOnInit() {

  }
  getSkill() {

  }
  startObserver() {

  }
}
