import { Component } from '@angular/core';
import { AdminBranchesService } from './admin-branches.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { branches } from './admin-branches.service';
import { debounceTime } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './admin-branches.component.html',
  styleUrls: ['./admin-branches.component.scss']
})
export class AdminBranchesComponent {
  length = 0;
  pageSize = 2;
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


  ELEMENT_DATA: branches[] = [];
  displayedColumns: string[] = ['branch_id', 'name', 'location', 'manager', 'phone', 'email', 'edit'];
  dataSource: MatTableDataSource<branches>;

  constructor(private service: AdminBranchesService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<branches>(this.ELEMENT_DATA);
    this.get();
  }

  get(): void {
    this.service.getData().subscribe(
      (data) => {

      // Update MatTableDataSource's data property
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

  toggleEdit(branches: branches): void {
    branches.editing = !branches.editing;
    if (!branches.editing) {
      // Logic to save changes locally
    }
  }

  handleInput(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const debouncedInput = this.service.getData().pipe(debounceTime(300));
    
    debouncedInput.subscribe((res) => {
      this.dataSource.data = res.filter((item) => item.name.toLowerCase().includes(searchValue));
    });
  }
  

  updateData(): void {
    // Wrap the single branch object in an array before passing it to updateData
    const updatedBranches: branches = this.ELEMENT_DATA[0];
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
