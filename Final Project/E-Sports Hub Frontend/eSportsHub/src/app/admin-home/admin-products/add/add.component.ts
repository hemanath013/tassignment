import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from './add.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private service:AddService, private router: Router) { }

  AddProducts: FormGroup;

  vehicleDetailsSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.AddProducts = new FormGroup({
      product_id: new FormControl<string>('', Validators.required),
      name: new FormControl<string>('', Validators.required),
      description: new FormControl<string>('', Validators.required),
      price: new FormControl<number>(0,Validators.required),
      category: new FormControl<string>('', Validators.required),
      brand: new FormControl<string>('', Validators.required),
    })
  }

  image: File;

  fileName: string = '';
  onFileUpload(event: Event) {
    this.image = (event.target as HTMLInputElement).files[0];
    this.fileName = this.image.name;
  }

  onSubmit() {
    if (this.AddProducts.valid === true) {
      const formData = new FormData();
      formData.append('product_id', this.AddProducts.value.product_id);
      formData.append('name', this.AddProducts.value.name);
      formData.append('description', this.AddProducts.value.description);
      formData.append('price', this.AddProducts.value.price);
      formData.append('category', this.AddProducts.value.category);
      formData.append('brand', this.AddProducts.value.brand);

      if(this.fileName !== null){
        formData.append('file', this.image);
      }
      else{
        formData.append('file', 'empty-file')
      }

      formData.forEach((key, value) => {
        // console.log(key, value);
      })
      
      this.service.addProduct(formData).subscribe({
        next: (response) => {
          console.log(response);
          
        }
      })


}
  }
}