import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { LoginService } from '../login/login.service';
import { Product } from './model/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  product$!: Promise<Product[]>;;
  responsiveOptions: any;
  
  constructor(private loginService: LoginService,
    private productService: ProductService,
  private _router: Router) { 

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
		this.product$ = this.productService.getProductsSmall();
		
    }

}
