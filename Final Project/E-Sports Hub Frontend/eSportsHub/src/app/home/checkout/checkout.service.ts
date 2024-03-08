import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private myCartKey = 'MyCart';

  constructor(private http:HttpClient) { }


  createOrder(amount: number) {
    return this.http.get(`${environment.paymentUrl}createTransaction/${amount}`);
  }

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
  }

  // post():Observable<order>{
    // return this.http.post<order>("")
  }

  
// }
interface order{}