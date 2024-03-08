import { Component } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private service:ProductDetailsService,private router:ActivatedRoute) {
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

}
