import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserAuthService } from "../User Auth/user-auth.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userAuth: UserAuthService,
    private router: Router) { }

  canActivate(): boolean {
    if (this._userAuth.loggedin()) {
      return true;
    } else {
      this.router.navigate(["user"]);
      return false;
    }
  }
}


