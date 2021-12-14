import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { ProductService } from './service/product.service';
import { AuthGuardService } from '../auth-guard.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [
    ProductService, AuthGuardService
  ]
})
export class DashboardModule { }
