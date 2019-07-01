import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username='';
  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.username = params.get("id");
    });
    console.log(this.username);
  }

}
