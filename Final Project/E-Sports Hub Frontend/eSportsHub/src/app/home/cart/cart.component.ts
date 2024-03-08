import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  myCart:any[];
  constructor(private cartService:CartService) {
    this.myCart = this.cartService.getCartItems();
  }

  getTotal(){
    return this.cartService.getTotal(this.myCart);
  }
 

  removeItem(item): void {
    this.cartService.removeFromCart(item);
    this.myCart = this.cartService.getCartItems();
  }

  // checkout(): void {
  //   localStorage.removeItem("MyCart")
  //   this.myCart = [];
  // }

  increaseQuantity(item): void {
    this.cartService.increaseQuantity(item);
    this.myCart = this.cartService.getCartItems();
  }

  decreaseQuantity(item): void {
    this.cartService.decreaseQuantity(item);
    this.myCart = this.cartService.getCartItems();
  }

  
  

}
