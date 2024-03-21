import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { CyclingComponent } from './home/categories/cycling/cycling.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-home/admin-users/admin-users.component';
import { AdminProductsComponent } from './admin-home/admin-products/admin-products.component';
import { AdminBranchesComponent } from './admin-home/admin-branches/admin-branches.component';
import { AdminDetailsComponent } from './admin-home/admin-details/admin-details.component';
import { AdminOrdersComponent } from './admin-home/admin-orders/admin-orders.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerOfferComponent } from './manager-home/manager-offer/manager-offer.component';
import { ManagerProductsComponent } from './manager-home/manager-products/manager-products.component';
import { ManagerDetailsComponent } from './manager-home/manager-details/manager-details.component';
import { ManagerOrdersComponent } from './manager-home/manager-orders/manager-orders.component';
import { CategoryDetailsComponent } from './home/categories/category-details/category-details.component';
import { AddComponent } from './admin-home/admin-products/add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'category/:id', component:CategoryDetailsComponent },
  { path: 'cycling', component: CyclingComponent },
  { path: 'checkoutDetails', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cartt/login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart/:flag', component: CartComponent },
  { path: 'cartt/checkout', component: CheckoutComponent },
  {path:"admin",component:AdminUsersComponent},
  {path:"admin-users",component:AdminUsersComponent},
  {path:"admin-products",component:AdminProductsComponent},
  {path:"admin-branches",component:AdminBranchesComponent},
  {path:"admin-details",component:AdminDetailsComponent},
  {path:"admin-orders",component:AdminOrdersComponent},

  {path:"manager",component:ManagerOfferComponent},
  {path:"manager-offer",component:ManagerOfferComponent},
  {path:"manager-products",component:ManagerProductsComponent},
  {path:"manager-details",component:ManagerDetailsComponent},
  {path:"manager-orders",component:ManagerOrdersComponent},
  {path:"ADD-products",component:AddComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
