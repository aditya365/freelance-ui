import { Component, OnInit, Input } from '@angular/core';
import { DevelopersService } from 'src/app/core/services/developers/developers.service';

@Component({
  selector: 'app-developers-item',
  templateUrl: './developers-item.component.html',
  styleUrls: ['./developers-item.component.scss']
})
export class DevelopersItemComponent implements OnInit {
  @Input() developer:any;
  constructor() { }

  ngOnInit() {
  }
}
