import { Component } from '@angular/core';
import { CyclingService } from './cycling.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-cycling',
  templateUrl: './cycling.component.html',
  styleUrls: ['./cycling.component.scss']
})
export class CyclingComponent {
constructor(private service:CyclingService,private router:Router,private cartService:CartService,public dialog: MatDialog){
  this.get();
}



 cycle:any;
get() {
  this.service.getData("cycle").subscribe((data) => { 
    // console.log(data);
    this.cycle = data;
  });
}

navigate(id:any){
  this.router.navigate(['productDetails',id]);
}

addToCart(item) {
 this.cartService.addToCart(item);
// console.log('Item added to cart:', item);
}


openDialog() {
const dialogRef = this.dialog.open(CartComponent);

dialogRef.afterClosed().subscribe(result => {
 console.log(`Dialog result: ${result}`);
});
}
}


