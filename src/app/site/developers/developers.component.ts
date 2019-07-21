import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { SearchProfile } from 'src/app/core/models/search-profile.model';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  result: SearchProfile[];

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getRandomDeveloperProfile().subscribe(result => {
      this.result = result.json();
      console.log('The re' + result.json());
    });
  }

}
