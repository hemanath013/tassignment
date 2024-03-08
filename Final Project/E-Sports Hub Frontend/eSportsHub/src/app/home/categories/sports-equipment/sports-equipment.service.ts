import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SportsEquipmentService {

  constructor(private http:HttpClient) { }
 
  getData():Observable<products[]>{
    return this.http.get<products[]>(`${environment.productGetUrlByCategories}cycle`);

  }

}

export interface products{name:string,description:string,price:number,brand:string,image:string}
