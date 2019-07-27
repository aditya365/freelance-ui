import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

}
