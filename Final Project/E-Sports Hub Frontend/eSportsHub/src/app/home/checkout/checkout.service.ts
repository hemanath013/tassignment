import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private myCartKey = 'MyCart';
  private myUserId = 'userId';

  constructor(private http:HttpClient) { }


  createOrder(amount: number) {
    return this.http.get(`${environment.paymentUrl}createTransaction/${amount}`);
  }

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
  }

  getUserId(): string{
    return localStorage.getItem(this.myUserId)
    
  }

  post(formData:any):Observable<any>{
    return this.http.post<any>(environment.PostOrdersUrl,formData)
  }

  
}
