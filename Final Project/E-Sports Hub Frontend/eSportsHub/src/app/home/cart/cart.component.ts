import { Component, Inject, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  flag = 'false';
  myCart: any[];
  constructor(
    private cartService: CartService,
    private service: LoginService,
    private router: ActivatedRoute
  ) {
    this.myCart = this.cartService.getCartItems();

    // console.log(data.isDialog);
  }

  ngOnInit() {
    this.flag = this.router.snapshot.paramMap.get('flag') || 'false';
  }

  getTotal() {
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

  isThere = this.service.isAuthenticated();
}
