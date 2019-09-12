import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var currentUser = this.authService.currentUserValue;
    if (currentUser) {
      //check if route is restricted by role
      if (route.data.excludeRoles
        && route.data.excludeRoles.indexOf(currentUser.role) > -1
        && route.data.includeRoles
        && route.data.includeRoles.indexOf(currentUser.role) === -1
      ) {
        this.router.navigate(['/auth/signin']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url } })
    return false;
  }
}
