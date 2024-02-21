import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { CategoriesComponent } from './home/categories/categories.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { MenusComponent } from './home/menus/menus.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './home/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-home/admin-header/admin-header.component';
import { AdminNavbarComponent } from './admin-home/admin-navbar/admin-navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminUsersComponent } from './admin-home/admin-users/admin-users.component';
import { AdminRestaurantsComponent } from './admin-home/admin-restaurants/admin-restaurants.component';
import { AdminMenusComponent } from './admin-home/admin-menus/admin-menus.component';
import { AdminOrdersComponent } from './admin-home/admin-orders/admin-orders.component';
import { AdminDetailsComponent } from './admin-home/admin-details/admin-details.component';
import {MatTableModule} from '@angular/material/table';
import { AuthInterceptor } from './interceptor/inter.interceptor';
import { AdminaddRestaurantsComponent } from './admin-home/admin-restaurants/adminadd-restaurants/adminadd-restaurants.component';
import { AdminAddUsersComponent } from './admin-home/admin-users/admin-add-users/admin-add-users.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    RestaurantsComponent,
    MenusComponent,
    NavbarComponent,
    CartComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminNavbarComponent,
    AdminUsersComponent,
    AdminRestaurantsComponent,
    AdminMenusComponent,
    AdminOrdersComponent,
    AdminDetailsComponent,
    AdminaddRestaurantsComponent,
    AdminAddUsersComponent,
    // AdminMenusAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatDialogModule,
      MatToolbarModule,
      MatTableModule
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
,
  providers: [HttpClient,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
