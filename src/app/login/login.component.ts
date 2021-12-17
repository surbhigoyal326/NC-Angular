import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  responseData: any;

  errorMessage!: string;
  constructor(private _loginservice: LoginService,
    private _router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  isValid(controlName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  login() {

    if (this.loginForm.valid) {
      this._loginservice.login(this.loginForm.value)
    //  .pipe(map(data => this.responseData.refreshToken = data))
        .subscribe(
          data  => {
            this.responseData = data;
            localStorage.setItem('refreshToken', this.responseData.refreshToken.toString());
            localStorage.setItem('token', this.responseData.token.toString());
            console.log(localStorage.getItem('refreshToken'))
            console.log(localStorage.getItem('token'))
            this._router.navigate(['/dashboard']);
          },
          error => { this.errorMessage = error.error.message; }
        );
    }
  }

}