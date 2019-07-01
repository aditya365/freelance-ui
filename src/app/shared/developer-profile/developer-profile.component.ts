import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { searchProfile } from 'src/app/models/searchProfile';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss']
})
export class DeveloperProfileComponent implements OnInit {
  @Input() profile: searchProfile;
  @Output() selectEvent = new EventEmitter<searchProfile>();

  constructor() { }

  ngOnInit() {
  }
  profileSlected(selectedProfile) {
    this.selectEvent.emit(this.profile);
  }
}
