import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    /*this.auth.appUser$
      .map(appUser => appUser.isAdmin);*/
  }
}
