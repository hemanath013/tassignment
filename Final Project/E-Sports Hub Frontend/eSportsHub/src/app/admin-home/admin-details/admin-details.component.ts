import { Component } from '@angular/core';
import { AdminUsersService } from '../admin-users/admin-users.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent {


user_id:string = '';


constructor(private service:AdminUsersService) {
  this.user_id = this.service.getUserId();
  // console.log(this.user_id);
  this.get(); 
}

userData: userData = {
  user_id: '',
  username: '',
  email: ''
};
get(){
  this.service.getDa().subscribe((data) =>{
    this.user_id = data.user_id;
    this.userData.username = data.username;
    this.userData.email = data.email;

  })
  
}

}

interface userData{user_id:string,username:string,email:string}
