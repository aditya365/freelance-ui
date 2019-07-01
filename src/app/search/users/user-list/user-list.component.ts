import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { searchProfile } from 'src/app/models/searchProfile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchData = [];
  dataFetched = false;
  profiles = [];
  error = false;
  errorMessage = '';
  search = [];
  public url: string = "";
  public splitSearch: string[];
  constructor(private searchService: SearchService, private route: ActivatedRoute, private routerUrl: Router) {
    console.log('Called Constructor');

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Routers are' + this.routerUrl.url)
      this.url = this.routerUrl.url;
      this.splitSearch = (this.routerUrl.url).split('/');
      // if (this.splitSearch[2] != undefined)
      //   this.search.push(this.splitSearch[2]);
    });
    this.getSearchResults();
  }

  pushData() {
    if (this.dataFetched) {
      if(this.searchData.length ==0)
        this.error=true;
      this.searchData.forEach(element => {
        this.profiles.push(new searchProfile(element));
      });
    }
  }
  findLength() {
    if (this.dataFetched = true && this.profiles.length == 0)
      return false
    return true
  }
  getSearchResults() {
    this.dataFetched = false;
    this.searchService.searchSkills([this.splitSearch[2]])
      .subscribe(res => {
        console.log("ther response is " + res)
        if (res.status === 200) {
          this.searchData = res.json();
          this.dataFetched = true;
          this.pushData();
        } else {
          this.error = true;
          this.errorMessage = res.json();
        }
      }, (error) => {
        this.error = true;
        this.errorMessage = error;
      });
  }

  developerSelected(profile: searchProfile) {
    console.log(profile);
  }

}
