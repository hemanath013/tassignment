import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminMenusService } from '../admin-menus.service';
import { AdminMenusAddService } from './admin-menus-add.service';

@Component({
  selector: 'app-admin-menus-add',
  templateUrl: './admin-menus-add.component.html',
  styleUrls: ['./admin-menus-add.component.scss']
})
export class AdminMenusAddComponent { 

  formData = {_id:'',restaurantId:'',name:'',description:'',price:''};


  constructor(
    public dialogRef: MatDialogRef<AdminMenusAddComponent>,
    private adminMenusService : AdminMenusAddService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  
  
 
  ngOnInit() {
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }
 
  onSubmit() {  
      
  
  //  this.adminMenusService.addProduct(this.addProductForm.value).subscribe(
  //   response => {
  //     this.dialogRef.close();
  //   });
  // }
 
 
 
}
}
 
