import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CyclingService } from '../cycling/cycling.service';
import { CartComponent } from '../../cart/cart.component';

import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent {
  category: string;
  products: any;
  constructor(private route: ActivatedRoute, private service:CyclingService,private router:Router,private cartService:CartService,public dialog: MatDialog) {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('id');
      // console.log('Category:', this.category);
      this.get();
    });
  }

  get(){
    this.service.getData(this.category).subscribe((result)=>{
      this.products = result;
      // console.log(result);
      
    })
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
