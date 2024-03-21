import { Component } from '@angular/core';
import { ProductcardsService } from './productcards.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CartService } from 'src/app/home/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.scss'],
})
export class ProductcardsComponent {
  searchValue: string;
  constructor(
    private service: ProductcardsService,
    private router: Router,
    private cartService: CartService,
    public dialog: MatDialog,
    private nav: NavbarService
  ) {
    this.get();
    this.nav.searchValue$.subscribe((value) => {
      // console.log('hi');

      this.searchValue = value;
      this.getBySearch(value);
    });
  }

  pro: any;

  get() {
    this.service.getData().subscribe((data) => {
      // console.log(data);
      this.pro = data;
    });
  }

  getBySearch(searchValue) {
    // console.log(searchValue);

    this.service.getData().subscribe((data) => {
      // console.log(searchValue);
      this.pro = data.filter((card) =>
        card.name.toLowerCase().includes(searchValue)
      );
    });
  }
  navigate(id: any) {
    this.router.navigate(['productDetails', id]);
  }

  addToCart(item) {
    this.cartService.addToCart(item);
    // console.log('Item added to cart:', item);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
