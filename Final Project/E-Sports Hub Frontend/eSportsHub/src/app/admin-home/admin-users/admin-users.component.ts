import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from './admin-users.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { user } from './admin-users.service';
import { UserAddComponent } from './user-add/user-add.component';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
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

  ELEMENT_DATA: user[] =[]
  displayedColumns: string[] = ['user_id','username','email','address','phone','role','edit']; 
  dataSource: MatTableDataSource<user>;

  constructor(private service:AdminUsersService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<user>(this.ELEMENT_DATA);
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

  toggleEdit(user: user): void {
    user.editing = !user.editing;
    if (!user.editing) {
      // Logic to save changes locally
    }
  }

  handleInput(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const debouncedInput = this.service.getData().pipe(debounceTime(300));
    
    debouncedInput.subscribe((res) => {
      this.dataSource.data = res.filter((item) => item.username.toLowerCase().includes(searchValue));
    });
  }

  updateData(): void {
    // Assuming you have a method in your service to update data
    const updatedBranches: user = this.ELEMENT_DATA[0];

    this.service.updateData(updatedBranches).subscribe(
      (data) => {
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
