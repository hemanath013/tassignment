import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatSidenavModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
