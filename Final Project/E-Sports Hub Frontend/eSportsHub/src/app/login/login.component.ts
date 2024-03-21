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

  constructor(private loginService:LoginService , private route:Router){}


  log = new FormGroup ({
    UserName: new FormControl("" , Validators.required),
    password: new FormControl("" , Validators.required)
  });

  formData = {username: "" , password: ""}

  onSubmit(){

     this.formData.username = this.log.controls.UserName.value,
     this.formData.password = this.log.controls.password.value;

 
     if (!this.log.valid) {
      this.errorMessage = "Please fill out both username and password fields.";
      return;
    }

    this.loginService.login(this.formData).subscribe((data) =>{
      
       
      localStorage.setItem("token" , data.token);
      localStorage.setItem("role" , data.role);
      
      localStorage.setItem('isLogin' ,"true");
      // console.log(data.id);
      
      localStorage.setItem("Id" , data.id);

      if (data.id !== null) {
        localStorage.setItem("userId" , data.id);
      } else {
        // console.log("User ID is null in the response.");
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
      console.error('Login error:' , error);
      if (error) {
        this.errorMessage = "Invalid username or password. Please try again.";
      }
    }
    
    );
  
  }

}
