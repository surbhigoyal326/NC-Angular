import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
//import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _myservice: EmpServiceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
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
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/dashboard']);
          },
          error => { }
        );
    }
  }

}