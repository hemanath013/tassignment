import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CyclingService {

  constructor(private http:HttpClient) { }
 
  getData(category:string):Observable<products[]>{
    // console.log(category);
    return this.http.get<products[]>(`${environment.baseUrl}/api/products/by-category/${category}`);

  }

}

export interface products{name:string,description:string,price:number,brand:string,image:string,category:string}