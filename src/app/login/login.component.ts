import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
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
        .subscribe(
          data => {
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dashboard']);
          },
          error => { this.errorMessage = error.error.message; }
        );
    }
  }

}