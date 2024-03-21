import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { MatSelectChange } from '@angular/material/select';
import { AdminProductsService, BranchDetails, products } from 'src/app/admin-home/admin-products/admin-products.service';
import { debounceTime } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
// import products from 'razorpay/dist/types/products';
// import products from 'razorpay/dist/types/products';

@Component({
  selector: 'app-manager-products',
  templateUrl: './manager-products.component.html',
  styleUrls: ['./manager-products.component.scss']
})
export class ManagerProductsComponent {

  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.get();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ELEMENT_DATA:any;
  displayedColumns: string[] = ['product_id', 'name', 'description', 'price', 'category', 'brand', 'totalStock', 'branchDetails','image','edit'];
  dataSource: MatTableDataSource<products>;
  selectedBranchId: string | null = null; 
  constructor(private service:AdminProductsService,public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<products>(this.ELEMENT_DATA);
    this.get();
  }

  get(): void{
    this.service.getData().subscribe(
      (data) => {
        // console.log(data);
        
          this.length = data.length;
          const startIndex = this.pageIndex*this.pageSize;
          const endIndex = this.pageIndex*this.pageSize + this.pageSize;
          this.ELEMENT_DATA = data.slice(startIndex, endIndex);
          this.dataSource.data = this.ELEMENT_DATA;  
       
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
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
  }

  handleInput(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const debouncedInput = this.service.getData().pipe(debounceTime(300));
    
    debouncedInput.subscribe((res) => {
      this.dataSource.data = res.filter((item) => item.name.toLowerCase().includes(searchValue));
    });
  }


  updateData(): void {
    // Assuming you have a method in your service to update data
    this.service.updateData(this.ELEMENT_DATA).subscribe(
      () => {
        // console.log("Data updated successfully");
        this.get();
      },
      (error) => {
        console.error("Error updating data:", error);
      }
    );
  }


file: File;

onFileUpload(event: any) {
  this.file =  event.target.files[0];
}

// Inside ManagerProductsComponent class
onFileSelected(product: products) {
  // console.log(product);
  
  const formData = new FormData();
  formData.append('id', product.id),
  formData.append('product_id', product.product_id),
  formData.append('name', product.name),
  formData.append('description', product.description),
  formData.append('price', product.price.toString()),
  formData.append('category', product.category),
  formData.append('brand', product.brand),
  formData.append('totalStock', product.totalStock.toString());

  if (this.file !== null) {
    formData.append('file', this.file);  
  }
  else{
    const emptyFile = new File([""], "empty.txt", {
      type: "text/plain",
    });
    formData.append('file',emptyFile);
  }
  
  
  this.service.updateData(formData).subscribe({
    next: (response) => {
      // console.log(response);
      
    }
  })

  // console.log('Uploading image for product:', product, 'File:', this.file);
}



}






