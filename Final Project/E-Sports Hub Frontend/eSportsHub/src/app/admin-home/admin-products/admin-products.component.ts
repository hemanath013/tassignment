import { Component } from '@angular/core';
import { AdminProductsService, products } from './admin-products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BranchDetails } from './admin-products.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  


  ELEMENT_DATA:any;
  displayedColumns: string[] = ['product_id', 'name', 'description', 'price', 'category', 'brand', 'totalStock', 'branchDetails'];
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

  getBranchDetailsString(branchDetails: BranchDetails[]): string {
    if (!branchDetails) {
      return ''; // Return an empty string if branchDetails is null or undefined
    }
    return branchDetails.map(branch => `${branch.branchId}: ${branch.location} (${branch.stockQuantity})`).join(', ');
  }

  onBranchSelectionChange(product: products, event: MatSelectChange) {
    const selectedBranchId = event.value;
    // Implement your logic here based on the selected branch ID
    console.log(`Selected branch ID for product ${product.product_id}: ${selectedBranchId}`);
  }
  
}



