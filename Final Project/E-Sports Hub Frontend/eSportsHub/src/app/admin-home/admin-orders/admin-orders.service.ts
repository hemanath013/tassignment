import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import orders from 'razorpay/dist/types/orders';
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
  updateData(orders: order[]): Observable<any> {
    return this.http.put(`${environment.updateOrderUrl}/${orders[0]._id}`, orders);
  }

}
export interface order{  
  _id:string,
  userId:string,
products: [],
totalPrice: number,
fullName:string,
phone: string,
email: string,
pinCode: string,
fullAddress: string,
paymentMethod: string,
editing?: boolean;
}

export interface products{product_id:string,quantity:number}