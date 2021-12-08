import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';
  constructor(private myService: EmpServiceService,
  private _router: Router) { 
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/login'])
    )
  }

  ngOnInit(): void {
  }

}
