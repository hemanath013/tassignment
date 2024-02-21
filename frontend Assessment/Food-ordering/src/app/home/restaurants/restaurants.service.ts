import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantsModule } from './restaurants.module';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url:string = environment.searchRestaurantsUrl;

  constructor(private http:HttpClient) { }
  

  SearchRestaurantsByName():Observable<Restaurants>{
    return this.http.get<Restaurants>(this.url)

  }


}

interface Restaurants{ restaurantId:string,name:string, description:string,location:string, cuisine:string}
