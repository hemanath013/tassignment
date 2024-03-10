import { Component } from '@angular/core';
import { SportsEquipmentService } from './sports-equipment.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-sports-equipment',
  templateUrl: './sports-equipment.component.html',
  styleUrls: ['./sports-equipment.component.scss']
})
export class SportsEquipmentComponent {
  constructor(private service:SportsEquipmentService,private router:Router,private cartService:CartService,public dialog: MatDialog){
    this.get();
  }
  
   sports:any;
  get() {
    this.service.getData().subscribe((data) => { 
      console.log(data);
      this.sports = data;
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



