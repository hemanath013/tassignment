import { Component } from '@angular/core';
import { ProductcardsService } from './productcards.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';


@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.scss'],
})
export class ProductcardsComponent {
  constructor(private service: ProductcardsService,private router:Router,private cartService:CartService) {this.get();}

  pro:any;
 
  get() {
    this.service.getData().subscribe((data) => { 
      console.log(data);
      this.pro = data;
    });
  }

  navigate(id:any){
       this.router.navigate(['productDetails',id]);
  }
 
  addToCart(item) {
      this.cartService.addToCart(item);
    console.log('Item added to cart:', item);
  }


}