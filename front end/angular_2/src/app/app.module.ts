import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomFilterPipe } from './custom-filter.pipe';
import { DemoService } from './services/demo.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { LoginService } from './services/login.service';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { UsersComponent } from './users/users.component';
import { ModelsComponent } from './models/models.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,
    loadChildren: () => import('./login/login.module').then((x) => x.LoginModule),},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent}


]


@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    CustomFilterPipe,
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ChildComponent,
    UsersComponent,
    ModelsComponent
    
  ],
  providers: [LoginService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
