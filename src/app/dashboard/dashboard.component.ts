import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productService: ProductService,
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
    // Data form local json file
    // this.product$ = this.productService.getProductsSmall();

    // Api call 
    this.product$ = this.productService.getProducts();

  }

}
