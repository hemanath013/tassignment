import { Component, ViewChild } from '@angular/core';
import { AdminProductsService, products } from './admin-products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BranchDetails } from './admin-products.service';
import { MatSelectChange } from '@angular/material/select';
import { debounceTime } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { AddComponent } from './add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
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
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  ELEMENT_DATA: products[] = [];
  displayedColumns: string[] = [
    'product_id',
    'name',
    'description',
    'price',
    'category',
    'brand',
    'totalStock',
    'branchDetails',
    'edit',
  ];
  dataSource: MatTableDataSource<products>;
  selectedBranchId: string | null = null;

  constructor(private service: AdminProductsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<products>(this.ELEMENT_DATA);
    this.get();
  }

  get(): void {
    this.service.getData().subscribe(
      (data) => {
        this.length = data.length;
        const startIndex = this.pageIndex * this.pageSize;
        const endIndex = this.pageIndex * this.pageSize + this.pageSize;
        this.ELEMENT_DATA = data.slice(startIndex, endIndex);
        this.dataSource.data = this.ELEMENT_DATA;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  details: any;

  getBranchDetailsString(branchDetails: BranchDetails[]): string {
    if (!branchDetails) {
      return '';
    }
    this.details = branchDetails
      .map(
        (branch) =>
          `${branch.branchId}: ${branch.location} (${branch.stockQuantity})`
      )
      .join(', ');
    return this.details;
  }

  onBranchSelectionChange(product: products, event: MatSelectChange) {
    const selectedBranchId = event.value;
    console.log(
      `Selected branch ID for product ${product.product_id}: ${selectedBranchId}`
    );
  }

  toggleEdit(products: products): void {
    products.editing = !products.editing;
    if (!products.editing) {
    }
  }

  handleInput(event: any) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const debouncedInput = this.service.getData().pipe(debounceTime(300));

    debouncedInput.subscribe((res) => {
      this.dataSource.data = res.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
      );
    });
  }

  updateData(): void {
    // Assuming you have a method in your service to update data
    const updatedBranches: products = this.ELEMENT_DATA[0];

    this.service.updateData1(updatedBranches).subscribe(
      () => {
        Swal.fire({
          title: "Success!",
          text: "The data has been updated successfully.",
          icon: "success"
        });
        this.get();
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '700px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
