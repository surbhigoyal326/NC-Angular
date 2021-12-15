import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu!: boolean;
  constructor(public location: Location) {

  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.showMenu = false;
  }

}
