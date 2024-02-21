import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData = {username:"",password:""};
  submit =false;
  errorMessage = '';
  

   constructor(private loginService:LoginService,private router:Router,private auth:AuthService){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.loginService.login(this.formData).subscribe(
      (data) => {console.log(data.token);
        this.auth.storedToken(data.token);

        this.router.navigate(['']);
      },
      (error) => {
        if (error.error.message=="INVALID_PASSWORD" || error.error.message=="INVALID_USERNAME") {
            this.errorMessage = "Invalid Credentials!";
        } else{
            this.errorMessage = "Unknown error when logging into this account!";
        }
      }
    );



  }

}
