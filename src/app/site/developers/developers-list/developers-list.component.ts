import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/core/services/developers/developers.service';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {
  developers= [];
  constructor(private developersSerice: DevelopersService) { }

  ngOnInit() {
    this.developersSerice.getDevelopers().subscribe(develoeprs=>this.developers=develoeprs);
  }
}
