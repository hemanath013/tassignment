import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdminUsersService } from './admin-users.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { AdminAddUsersComponent } from './admin-add-users/admin-add-users.component';





export interface PeriodicElement {
  id: string;
  username: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent { ELEMENT_DATA:any;
  displayedColumns: string[] = ['id', 'username','role','firstName','lastName','phoneNumber','address'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private service:AdminUsersService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
   this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe({
      next:(response)=>{    
        console.log(response);
        
        this.ELEMENT_DATA=response;
        this.dataSource = this.ELEMENT_DATA
      },
      error:(error)=>{
        console.log(error);
        
      }  
    })
    }
      
    
      addData() {    const dialogRef = this.dialog.open(AdminAddUsersComponent, {
        width: '500px',
      });
    
      dialogRef.afterClosed().subscribe(result => {
       this.getAllUsers();
        
      });
     
    }
    
      removeData() {
        this.ELEMENT_DATA.pop();
        this.dataSource.data = this.ELEMENT_DATA;
      }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.dataSource.filter = filterValue;
      }
    }
    
    class ExampleDataSource extends DataSource<PeriodicElement> {
      private _dataStream = new ReplaySubject<PeriodicElement[]>();
    
      constructor(initialData: PeriodicElement[]) {
        super();
        this.setData(initialData);
      }
    
      connect(): Observable<PeriodicElement[]> {
        return this._dataStream;
      }
    
      disconnect() {}
    
      setData(data: PeriodicElement[]) {
        this._dataStream.next(data);
      }
    
      applyFilter(event: Event) {
       
      }
    }
    