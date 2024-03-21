import { Component } from '@angular/core';
import { AdminOrdersService, order,products } from './admin-orders.service';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {
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


  ELEMENT_DATA: order[] =[]

  displayedColumns: string[] = ['userId', 'totalPrice', 'fullName', 'phone', 'email', 'fullAddress', 'paymentMethod','orderDate','products'];
  dataSource: MatTableDataSource<order>;
  selectedBranchId: string | null = null; 
  constructor(private service:AdminOrdersService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<order>(this.ELEMENT_DATA);
    this.get();
  }
  get(): void{
    this.service.getData().subscribe(
    (data) => {
      //  console.log(data);
      this.length = data.length;
      const startIndex = this.pageIndex*this.pageSize;
      const endIndex = this.pageIndex*this.pageSize + this.pageSize;
      this.ELEMENT_DATA = data.slice(startIndex, endIndex);
      this.dataSource.data = this.ELEMENT_DATA;  
   ;
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}
  details:any;

  getBranchDetailsString(products: products[]): string {
    if (!products || products.length === 0) {
      return '';
    }
    
    return products.map(product => `Product ID: ${product.productId}, Quantity: ${product.quantity}`).join(', ');
  }
  
  toggleEdit(order: order): void {
    order.editing = !order.editing;
    if (!order.editing) {
    }
  }

  
  handleInput(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const debouncedInput = this.service.getData().pipe(debounceTime(300));
    
    debouncedInput.subscribe((res) => {
      this.dataSource.data = res.filter((item) => item.fullName.toLowerCase().includes(searchValue));
    });
  }


  updateData(): void {
    // Assuming you have a method in your service to update data
    const updatedBranches: order = this.ELEMENT_DATA[0];

    this.service.updateData(updatedBranches).subscribe(
      () => {
        Swal.fire({
          title: "Success!",
          text: "The data has been updated successfully.",
          icon: "success"
        });
        this.get();
      },
      (error) => {
        console.error("Error updating data:", error);
      }
    );
  }



}
