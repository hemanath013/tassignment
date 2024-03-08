import { Component } from '@angular/core';
import { AdminUsersService } from './admin-users.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { user } from './admin-users.service';
import { UserAddComponent } from './user-add/user-add.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
  ELEMENT_DATA:any;
  displayedColumns: string[] = ['_id','user_id','username','email','address','phone','role',]; 
  dataSource: MatTableDataSource<user>;

  constructor(private service:AdminUsersService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<user>(this.ELEMENT_DATA);
    this.get();
  }

  get(){
    this.service.getData().subscribe(
      (data) => { console.log(data);
        this.ELEMENT_DATA = data;
        this.dataSource = this.ELEMENT_DATA
       });
  }



}




   
// class ExampleDataSource extends DataSource<user> {
//   private _dataStream = new ReplaySubject<user[]>();

//   constructor(initialData: user[]) {
//     super();
//     this.setData(initialData);
//   }

//   connect(): Observable<user[]> {
//     return this._dataStream;
//   }

//   disconnect() {}

//   setData(data: user[]) {
//     this._dataStream.next(data);
//   }

//   applyFilter(event: Event) {
   
//   }
  
// }
