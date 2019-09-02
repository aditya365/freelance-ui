import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/core/services/developers/developers.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
