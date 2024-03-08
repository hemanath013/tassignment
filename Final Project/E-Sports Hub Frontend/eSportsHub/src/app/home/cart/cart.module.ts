import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule { }
