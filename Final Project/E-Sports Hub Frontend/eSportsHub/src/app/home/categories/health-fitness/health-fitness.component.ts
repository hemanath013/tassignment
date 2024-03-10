import { Component } from '@angular/core';
import { HealthFitnessService } from './health-fitness.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-health-fitness',
  templateUrl: './health-fitness.component.html',
  styleUrls: ['./health-fitness.component.scss']
})
export class HealthFitnessComponent {
  constructor(private service:HealthFitnessService,private router:Router,private cartService:CartService,public dialog: MatDialog){
    this.get();
  }
  
  
  
   health:any;
  get() {
    this.service.getData().subscribe((data) => { 
      console.log(data);
      this.health = data;
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


