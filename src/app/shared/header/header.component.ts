import { Location} from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showMenu!: boolean;
  constructor(public location:Location) {

  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.showMenu=false;
  }

}
