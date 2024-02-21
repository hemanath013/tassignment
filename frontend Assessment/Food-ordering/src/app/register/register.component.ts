import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData = {username:'',password:'',firstName:'',lastName:'',phoneNumber:'',address:''};
  submit = false;
  errorMessage = '';
  // loading = false;

  constructor(private registerService:RegisterService,private router:Router,private auth:AuthService){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    // this.loading = true;

    this.registerService.register(this.formData)
    .subscribe(
      (data) => {console.log(data.token);
        console.log(this.formData);
        this.auth.storedToken(data.token);
        this.router.navigate(['/login']);
        
      },
      (error) => {
        if (error.error.message=="INVALID_USERNAME") {

            this.errorMessage = "Invalid Email!";

        } else if (error.error.message=="EMAIL_EXISTS") {

            this.errorMessage = "Already Email Exists!";

        }else{

            this.errorMessage = "Unknown error occured when creating this account!";
        }
    }
        
        );
  
    }
  
  }
    
