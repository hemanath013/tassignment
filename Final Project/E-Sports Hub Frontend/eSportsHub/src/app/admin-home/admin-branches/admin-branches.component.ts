import { Component } from '@angular/core';
import { AdminBranchesService } from './admin-branches.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { branches } from './admin-branches.service';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './admin-branches.component.html',
  styleUrls: ['./admin-branches.component.scss']
})
export class AdminBranchesComponent {


  ELEMENT_DATA:any;
  displayedColumns: string[] = ['branch_id','name','location','manager','phone','email','edit']; 
  dataSource: MatTableDataSource<branches>;
  constructor(private service:AdminBranchesService,public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<branches>(this.ELEMENT_DATA);
    this.get();
  }

  get(){
    this.service.getData().subscribe(
      (data) => { console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource = this.ELEMENT_DATA
       });
  }
  toggleEdit(branches: branches): void {
    branches.editing = !branches.editing;
    if (!branches.editing) {
      // Logic to save changes locally
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
