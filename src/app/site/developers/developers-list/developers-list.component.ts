import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/core/services/developers/developers.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {
  developers:Observable<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.developers = this.userService.getDevelopers();
  }
}
