import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersService {

  constructor(private http:HttpClient) { }

  getData():Observable<order>{
    return this.http.get<order>(environment.getOrdersUrl)
  }
}
export interface order{  userId:string,
branchId: string,
products: [],
totalPrice: number,
fullName:string,
phone: string,
email: string,
pinCode: string,
fullAddress: string,
paymentMethod: string,
}

export interface products{product_id:string,quantity:number}