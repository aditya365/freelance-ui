import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { AuthService } from '../services/guard/auth.service';
import { SigninService } from '../services/auth/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private user: any;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  links = [{
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard'
  }, {
    label: 'Mail',
    route: 'mail',
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
    this.userService.getUserDetails().subscribe(user => this.user = user);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['']);
  }
}
