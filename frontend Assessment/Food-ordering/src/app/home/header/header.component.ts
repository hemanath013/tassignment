import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,public dialog: MatDialog){
    
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




  ngOnInit(): void {
      
  }
  Onclick(){
    sessionStorage.removeItem("token")
  }

}
