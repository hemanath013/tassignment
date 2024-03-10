import { Component } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import {FormBuilder, Validators,FormControl} from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginResponse } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submit = false;
  errorMessage = "";

  constructor(private loginService:LoginService, private route:Router){}


  log = new FormGroup ({
    UserName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  });

  formData = {username:"",password:""}

  onSubmit(){
     this.formData.username = this.log.controls.UserName.value,
     this.formData.password = this.log.controls.password.value,


    this.loginService.login(this.formData).subscribe((data) =>{
      console.log(data.token,"hlo");  
      console.log(data.user_id);
      console.log(data.role);
      
       
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      
      localStorage.setItem('isLogin',"true")
      localStorage.setItem("userId", data.user_id);

      if (data.user_id !== null) {
        localStorage.setItem("userId", data.user_id);
      } else {
        console.error("User ID is null in the response.");
        this.errorMessage = "Please check your UserId"
      }
      if(data.role === 'CUSTOMER'){
        this.route.navigate(['']);
      }else if(data.role === 'ADMIN'){
        this.route.navigate(['admin']);
      }else if(data.role === 'MANAGER'){
        this.route.navigate(['manager']);
      }

      
      
    },
    (error) => {
      console.error('Login error:', error);
      this.errorMessage = "No User Found"

    }
    
    );
  
  }

}
