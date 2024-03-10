import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { MatSelectChange } from '@angular/material/select';
import { AdminProductsService, BranchDetails, products } from 'src/app/admin-home/admin-products/admin-products.service';

@Component({
  selector: 'app-manager-products',
  templateUrl: './manager-products.component.html',
  styleUrls: ['./manager-products.component.scss']
})
export class ManagerProductsComponent {

  ELEMENT_DATA:any;
  displayedColumns: string[] = ['product_id', 'name', 'description', 'price', 'category', 'brand', 'totalStock', 'branchDetails','image','edit'];
  dataSource: MatTableDataSource<products>;
  selectedBranchId: string | null = null; 
  constructor(private service:AdminProductsService,public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<products>(this.ELEMENT_DATA);
    this.get();
  }

  get(){
    this.service.getData().subscribe(
      (data) => { console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource = this.ELEMENT_DATA
       });
  }

  
  details:any;

  getBranchDetailsString(branchDetails: BranchDetails[]): string {
    if (!branchDetails) {
      return ''; // Return an empty string if branchDetails is null or undefined
    }
    this.details =  branchDetails.map(branch => `${branch.branchId}: ${branch.location} (${branch.stockQuantity})`).join(', ');
    return this.details;
  }

  onBranchSelectionChange(product: products, event: MatSelectChange) {
    const selectedBranchId = event.value;
    // Implement your logic here based on the selected branch ID
    console.log(`Selected branch ID for product ${product.product_id}: ${selectedBranchId}`);
  }

  
  toggleEdit(products: products): void {
    products.editing = !products.editing;
    if (!products.editing) {
      
    }
  }

  updateData(): void {
    // Assuming you have a method in your service to update data
    this.service.updateData(this.ELEMENT_DATA).subscribe(
      () => {
        console.log("Data updated successfully");
        this.get();
      },
      (error) => {
        console.error("Error updating data:", error);
      }
    );
  }

// Inside ManagerProductsComponent class
onFileSelected(event: any, product: products) {
  const file: File = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  console.log('Uploading image for product:', product, 'File:', file);
}



}






