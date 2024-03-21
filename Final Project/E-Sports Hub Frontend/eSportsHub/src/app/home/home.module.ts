import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CartComponent } from './cart/cart.component';
import { SportsEquipmentComponent } from './categories/sports-equipment/sports-equipment.component';
import { HealthFitnessComponent } from './categories/health-fitness/health-fitness.component';
import { AccessoriesComponent } from './categories/accessories/accessories.component';
import { CyclingComponent } from './categories/cycling/cycling.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddComponent } from './admin-home/admin-products/add/add.component';




@NgModule({
  declarations: [
    CartComponent,
    SportsEquipmentComponent,
    HealthFitnessComponent,
    AccessoriesComponent,
    CyclingComponent,
    AddComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgModule,
    BrowserModule
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
