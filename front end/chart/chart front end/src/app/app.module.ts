import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { BarComponent } from './user/bar/bar.component';
import { MapComponent } from './user/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { PeiComponent } from './pei/pei.component';
import { LineComponent } from './user/line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BarComponent,
    MapComponent,
    PeiComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
