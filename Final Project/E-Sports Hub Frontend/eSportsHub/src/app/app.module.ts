import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule, STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductsliderComponent } from './home/productslider/productslider.component';
import { ProductcardsComponent } from './home/productcards/productcards.component';
import { FooterComponent } from './home/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoriesComponent } from './home/categories/categories.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { InterInterceptor } from './interceptor/inter.interceptor';
import { CyclingComponent } from './home/categories/cycling/cycling.component';
import { AccessoriesComponent } from './home/categories/accessories/accessories.component';
import { SportsEquipmentComponent } from './home/categories/sports-equipment/sports-equipment.component';
import { HealthFitnessComponent } from './home/categories/health-fitness/health-fitness.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartComponent } from './home/cart/cart.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDetailsComponent } from './admin-home/admin-details/admin-details.component';
import { AdminHeaderComponent } from './admin-home/admin-header/admin-header.component';
import { AdminNavbarComponent } from './admin-home/admin-navbar/admin-navbar.component';
import { AdminProductsComponent } from './admin-home/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-home/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin-home/admin-users/admin-users.component';
import { AdminBranchesComponent } from './admin-home/admin-branches/admin-branches.component';
import { UserAddComponent } from './admin-home/admin-users/user-add/user-add.component';
import { MatSelectModule } from '@angular/material/select';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerOrdersComponent } from './manager-home/manager-orders/manager-orders.component';
import { ManagerDetailsComponent } from './manager-home/manager-details/manager-details.component';
import { ManagerHeaderComponent } from './manager-home/manager-header/manager-header.component';
import { ManagerNavbarComponent } from './manager-home/manager-navbar/manager-navbar.component';
import { ManagerOfferComponent } from './manager-home/manager-offer/manager-offer.component';
import { ManagerProductsComponent } from './manager-home/manager-products/manager-products.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsliderComponent,
    ProductcardsComponent,
    CheckoutComponent,
    FooterComponent,
    CyclingComponent,
    AccessoriesComponent,
    SportsEquipmentComponent,
    HealthFitnessComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AdminHomeComponent,
    AdminDetailsComponent,
    AdminHeaderComponent,
    AdminNavbarComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminUsersComponent,
    AdminBranchesComponent,
    UserAddComponent,
    ManagerHomeComponent,
    ManagerDetailsComponent,
    ManagerHeaderComponent,
    ManagerNavbarComponent,
    ManagerProductsComponent,
    ManagerOfferComponent,
    ManagerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  providers: [HttpClient,{provide: HTTP_INTERCEPTORS, useClass: InterInterceptor,multi: true}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
