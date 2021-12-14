import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class  AuthGuardService implements CanLoad {

  username: string | undefined;
  constructor(private loginService: LoginService,
  private _router: Router) { 
    this.username= '';
  this.loginService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/login'])
    )
  }

canLoad() {
  if (this.username)
  return true;
  else return false;
}

}
