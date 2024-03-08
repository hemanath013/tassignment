import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerHomeRoutingModule } from './manager-home-routing.module';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { ManagerProductsComponent } from './manager-products/manager-products.component';
import { ManagerOfferComponent } from './manager-offer/manager-offer.component';
import { ManagerOrdersComponent } from './manager-orders/manager-orders.component';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    ManagerHomeRoutingModule
  ]
})
export class ManagerHomeModule { }
