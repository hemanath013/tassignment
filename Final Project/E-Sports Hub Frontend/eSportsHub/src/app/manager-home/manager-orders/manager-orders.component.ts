import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminOrdersService, order,products } from 'src/app/admin-home/admin-orders/admin-orders.service';
import { BranchDetails } from 'src/app/admin-home/admin-products/admin-products.service';

@Component({
  selector: 'app-manager-orders',
  templateUrl: './manager-orders.component.html',
  styleUrls: ['./manager-orders.component.scss']
})
export class ManagerOrdersComponent {

  ELEMENT_DATA:any;
  displayedColumns: string[] = ['userId', 'totalPrice', 'fullName', 'phone', 'email', 'fullAddress', 'paymentMethod','orderDate','products','edit'];
  dataSource: MatTableDataSource<order>;
  selectedBranchId: string | null = null; 
  constructor(private service:AdminOrdersService,public dialog: MatDialog) {
    this.get();
  }
  get(){
    this.service.getData().subscribe(
      (data) => { console.log("hlo",data);
        this.ELEMENT_DATA = data;
        this.dataSource = this.ELEMENT_DATA
       });
  }
  
  details:any;
  getBranchDetailsString(products: products[]): string {
    if (!products) {
      return ''; 
    }  
    this.details = products.map(products => `${products.product_id}: ${products.quantity}`).join(', ');
    return this.details;
  }

  toggleEdit(order: order): void {
    order.editing = !order.editing;
    if (!order.editing) {
    }
  }

  updateData(): void {
    // Assuming you have a method in your service to update data
    this.service.updateData(this.ELEMENT_DATA).subscribe(
      () => {
        console.log("Data updated successfully");
        // Optionally, refresh data after successful update
        this.get();
      },
      (error) => {
        console.error("Error updating data:", error);
      }
    );
  }



}
