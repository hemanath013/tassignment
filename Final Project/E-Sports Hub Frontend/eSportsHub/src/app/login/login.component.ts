import { Component } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';
import {FormBuilder, Validators,FormControl} from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submit = false;
  errorMessage = "";

  constructor(private loginService:LoginService,route:Router){}


  log = new FormGroup ({
    UserName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"))
  });

  formData = {username:"",password:""}

  onSubmit(){
     this.formData.username = this.log.controls.UserName.value,
     this.formData.password = this.log.controls.password.value,


    this.loginService.login(this.formData).subscribe((data) =>{
      console.log(data.token,"hlo");   
      localStorage.setItem("token", data.token);
    },
    (error) => {

    }
    
    );
  
  }

}
