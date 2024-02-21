import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminRestaurantsService {
  constructor(private http:HttpClient) { }

  getallRestaurants(){
  
    return this.http.get<any>(environment.getallAdminRestaurantsUrl);
  }
}

interface getallRestaurants{ restaurantId:string,name:string, description:string,location:string,cuisine:string}
