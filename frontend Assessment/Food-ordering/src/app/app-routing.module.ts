import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenusComponent } from './home/menus/menus.component';
import { MenusModule } from './home/menus/menus.module';
import { CategoriesComponent } from './home/categories/categories.component';
import { CategoriesModule } from './home/categories/categories.module';
import { CartComponent } from './home/cart/cart.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-home/admin-users/admin-users.component';
import { AdminRestaurantsComponent } from './admin-home/admin-restaurants/admin-restaurants.component';
import { AdminMenusComponent } from './admin-home/admin-menus/admin-menus.component';
import { AdminOrdersComponent } from './admin-home/admin-orders/admin-orders.component';
import { AdminDetailsComponent } from './admin-home/admin-details/admin-details.component';

  const routes: Routes = [{path:"",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"menus",component:MenusComponent,
  loadChildren: () => import('./home/menus/menus.module').then((x) => x.MenusModule)},
  {path:"categories",component:CategoriesComponent,
  loadChildren: () => import('./home/categories/categories.module').then((x) => x.CategoriesModule)},
  {path:"cart",component:CartComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"admin-users",component:AdminUsersComponent},
  {path:"admin-restaurants",component:AdminRestaurantsComponent},
  {path:"admin-menus",component:AdminMenusComponent},
  {path:"admin-orders",component:AdminOrdersComponent},
  {path:"admin-details",component:AdminDetailsComponent},




  



  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
