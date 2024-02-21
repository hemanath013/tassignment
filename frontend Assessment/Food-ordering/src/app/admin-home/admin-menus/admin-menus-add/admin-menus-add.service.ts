import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminMenusAddService implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      
  }

  addMenus(formData:any){

    return this.http.post<Menus>(environment.AddMenusUrl,formData);
  }
}

interface Menus{ _id:string,restaurantId:string,name:string, description:string,price:number}