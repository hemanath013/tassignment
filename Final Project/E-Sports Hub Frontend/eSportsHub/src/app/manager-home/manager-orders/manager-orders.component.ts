import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminOrdersService, order,products } from 'src/app/admin-home/admin-orders/admin-orders.service';

@Component({
  selector: 'app-manager-orders',
  templateUrl: './manager-orders.component.html',
  styleUrls: ['./manager-orders.component.scss']
})
export class ManagerOrdersComponent {

  ELEMENT_DATA:any;
  displayedColumns: string[] = ['userId', 'branchId', 'totalPrice', 'fullName', 'phone', 'email', 'fullAddress', 'paymentMethod','orderDate','products'];
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
  getBranchDetailsString(products: products[]): string {
    if (!products) {
      return ''; // Return an empty string if branchDetails is null or undefined
    }
    return products.map(products => `${products.product_id}: ${products.quantity} `).join(', ');
  }


}
