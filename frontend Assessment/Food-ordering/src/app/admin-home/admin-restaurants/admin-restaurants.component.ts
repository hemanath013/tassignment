import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AdminRestaurantsService } from './admin-restaurants.service';
import { AdminaddRestaurantsComponent } from './adminadd-restaurants/adminadd-restaurants.component';



export interface PeriodicElement {
  restaurantId: string;
  name: string;
  description: string;
  location: string;
  cuisine: string;
}


@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.scss']
})
export class AdminRestaurantsComponent {  ELEMENT_DATA:any;
  displayedColumns: string[] = ['restaurantId', 'name', 'description','location','cuisine'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private service:AdminRestaurantsService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
   this.getAllRestaurants();
  }

  getAllRestaurants(){
    this.service.getallRestaurants().subscribe({
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
      
    
      addData() {    const dialogRef = this.dialog.open(AdminaddRestaurantsComponent, {
        width: '500px',
      });
    
      dialogRef.afterClosed().subscribe(result => {
       this.getAllRestaurants();
        
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
    