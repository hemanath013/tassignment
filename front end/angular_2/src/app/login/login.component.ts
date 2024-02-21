import { Component,OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData = {username:'',password:""};
  submit = false;

  constructor(private loginService: LoginService){

  }
  
  ngOnInit(): void {

  }
  

  onSubmit(){
    this.loginService.login(this.formData).subscribe(
      (data) => {console.log(data.token);
      console.log(this.formData);
    },
    (error) => {console.log(error)
    console.log("error ");
  }
      
      );

  }

}
