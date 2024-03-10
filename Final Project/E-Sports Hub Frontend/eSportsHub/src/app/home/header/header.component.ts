import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public service:LoginService){
    
  }

    openDialog() {
    const dialogRef = this.dialog.open(CartComponent,{
    width:"400px",
    height:"500px",
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


isThere = this.service.isAuthenticated();

  ngOnInit(): void {
      
    console.log(this.isThere);
    
  }
  Onclick(){
    // sessionStorage.removeItem("token")
    // sessionStorage.removeItem("sm")
    localStorage.clear();
  }

}
