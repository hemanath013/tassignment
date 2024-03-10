import { Component } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private service:ProductDetailsService,private router:ActivatedRoute,private ser:CartService,private route:Router) {
   
  }
  id:any;
ngOnInit(){

 
  this.get();
  
}

separate:any

  get(){
    
    console.log(this.router.snapshot.paramMap.get('id')||'');
    this.service.getData(this.router.snapshot.paramMap.get('id')||'').subscribe((data) => {
      console.log(data);
      
      this.separate = data;

    });
  }

  addToCart(item) {
    this.ser.addToCart(item);
  console.log('Item added to cart:', item);
}



}
