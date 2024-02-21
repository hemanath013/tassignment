import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminMenusService {

  constructor(private http:HttpClient) { }

  getallMenus(){
  
    return this.http.get<Menus>(environment.getallAdminMenusUrl);
  }
}

interface Menus{ _id:string,restaurantId:string,name:string, description:string,price:number}
