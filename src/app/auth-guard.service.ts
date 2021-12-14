import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class  AuthGuardService implements  CanLoad{

  constructor(private loginService: LoginService,
  private _router: Router) { 
  }

  canLoad() {
    return this.loginService.getUserName().pipe(
      map(data => {
        if (data === 'admin') {
         
          return true;
        }
  
        return !!data;
      }),
      catchError(() => {
        this._router.navigate(['/']);
        return of(false);
      }),
    );
  }

}
