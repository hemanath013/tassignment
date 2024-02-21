import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { AdminMenusService } from './admin-menus.service';
import { AdminMenusAddComponent } from './admin-menus-add/admin-menus-add.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  _id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: string;
}


@Component({
  selector: 'app-admin-menus',
  templateUrl: './admin-menus.component.html',
  styleUrls: ['./admin-menus.component.scss']
})
export class AdminMenusComponent {
  ELEMENT_DATA:any;
  displayedColumns: string[] = ['_id', 'restaurantId', 'name', 'description','price'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private service:AdminMenusService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
   this.getAllMenu();
  }
getAllMenu(){
this.service.getallMenus().subscribe({
  next:(response)=>{    
    // console.log(response);
    
    this.ELEMENT_DATA=response;
    this.dataSource = this.ELEMENT_DATA
  },
  error:(error)=>{
    console.log(error);
    
  }

  
})
}
  

  addData() {    const dialogRef = this.dialog.open(AdminMenusAddComponent, {
    width: '500px',
  });

  dialogRef.afterClosed().subscribe(result => {
   this.getAllMenu();
    
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
