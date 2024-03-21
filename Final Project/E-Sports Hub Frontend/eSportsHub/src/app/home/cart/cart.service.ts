import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import items from 'razorpay/dist/types/items';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private myCartKey = 'MyCart';

  constructor(private http:HttpClient) { }

  addToCart(item: any) {
    let myCart: any[] = JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
    const existingItemIndex = myCart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      myCart[existingItemIndex].quantity++;
    } else {
      item.quantity = 1;
      myCart.push(item);
    }

    localStorage.setItem(this.myCartKey, JSON.stringify(myCart));
  }

  removeFromCart(item: any) {
    let myCart: any[] = JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
    const itemIndex = myCart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      myCart.splice(itemIndex, 1);
      localStorage.setItem(this.myCartKey, JSON.stringify(myCart));
    }
//     console.log('Item to remove:', item);
// console.log('Current Cart:', myCart);
// console.log('Index to remove:', itemIndex);

  }



  increaseQuantity(item: any) {
    let myCart: any[] = JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
    const existingItem = myCart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
      localStorage.setItem(this.myCartKey, JSON.stringify(myCart));
      }
  }
 amount:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getTotal(myCart): number {
    const amount =  myCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    this.amount.next(amount);
    return myCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  decreaseQuantity(item: any) {
    let myCart: any[] = JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
    const existingItem = myCart.find(cartItem => cartItem.id === item.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      localStorage.setItem(this.myCartKey, JSON.stringify(myCart));
    }
  }

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem(this.myCartKey) || '[]');
  }

  getAmount() {
    return this.amount.asObservable();
  }

}

export interface ordersHalf{""}
