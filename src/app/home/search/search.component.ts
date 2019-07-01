import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { ObserversModule } from '@angular/cdk/observers';
import { Skills } from 'src/app/models/skills';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  skills: Skills[];
  query$ = new Subject<string>();

  constructor(private searchService: SearchService) { 
    this.searchService.search(this.query$)
      .subscribe(results => {
        this.skills = results;
        console.log('Skils' + results);
      });
  }

  ngOnInit() {
    
  }
  ngOnDestroy() {

  }
  getSkill() {
   
  }
  startObserver() {
    
  }
}
