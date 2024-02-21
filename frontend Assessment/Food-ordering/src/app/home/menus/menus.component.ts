import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  constructor(private auth:AuthService){}
  ngOnInit(): void {
      
  }

  // addToMyCart = (menu : any) => {
  //   const newItem = {
  //     "id": menu.id,
  //     "name": menu.name,
  //     "price": menu.price,
  //     "quantity": 1
  //   }
  // }


  Onclick(){
    this.auth.canAccess()
  }

}
