import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  links = [{
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard'
  }, {
    label: 'Inbox',
    route: 'inbox',
    icon: 'email'
  }, {
    label: 'Sent Items',
    route: 'sent',
    icon: 'email'
  }, {
    label: 'Compose',
    route: 'compose',
    icon: 'email'
  }, {
    label: 'Projects',
    route: 'projects',
    icon: 'email'
  },
  {
    label: 'Profile',
    route: 'profile',
    icon: 'dashboard',
  },
  {
    label: 'Edit profile',
    route: 'profile/edit',
    icon: 'dashboard',
  }
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private userService: UserService,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.user = this.userService.getBasicUserDetails();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['']);
  }
}
