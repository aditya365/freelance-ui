import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchProfile } from 'src/app/core/models/search-profile.model';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss']
})
export class DeveloperProfileComponent implements OnInit {
  @Input() profile: SearchProfile;
  @Output() selectEvent = new EventEmitter<SearchProfile>();

  constructor() { }

  ngOnInit() {
  }
  profileSlected(selectedProfile) {
    this.selectEvent.emit(this.profile);
  }
}
