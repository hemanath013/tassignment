import { Component } from '@angular/core';
import { AccessoriesService } from './accessories.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent {

  constructor(private service:AccessoriesService,private router:Router,private cartService:CartService,public dialog: MatDialog) {
    this.get()
  }

  access:any;

  get(){
     this.service.getData().subscribe((data) => {
      console.log(data);
       this.access = data;

     });
  }

  navigate(id:any){
    this.router.navigate(['productDetails',id]);
}

addToCart(item) {
   this.cartService.addToCart(item);
 console.log('Item added to cart:', item);
}


openDialog() {
 const dialogRef = this.dialog.open(CartComponent);

 dialogRef.afterClosed().subscribe(result => {
   console.log(`Dialog result: ${result}`);
 });
}
}



