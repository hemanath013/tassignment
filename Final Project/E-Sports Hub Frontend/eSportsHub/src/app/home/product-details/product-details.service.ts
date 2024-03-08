import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  getData(id:string):Observable<products>{
    return this.http.get<products>(`${environment.productGetUrl}/${id}`)
  }
}

export interface products{name:string,description:string,price:number,brand:string,image:string}
