import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CartComponent } from './cart/cart.component';
import { SportsEquipmentComponent } from './categories/sports-equipment/sports-equipment.component';
import { HealthFitnessComponent } from './categories/health-fitness/health-fitness.component';
import { AccessoriesComponent } from './categories/accessories/accessories.component';
import { CyclingComponent } from './categories/cycling/cycling.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    CartComponent,
    SportsEquipmentComponent,
    HealthFitnessComponent,
    AccessoriesComponent,
    CyclingComponent,
    
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
