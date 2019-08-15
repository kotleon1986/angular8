import { Injectable } from "@angular/core";
import {Route, UrlSegment, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.checkAuth()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.checkAuth()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }

  checkAuth(): boolean {
    return !!localStorage.getItem('token');
  }
}
