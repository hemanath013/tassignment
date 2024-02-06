import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

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

  constructor(private auth:AuthService){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    // this.loading = true;

    this.auth.register(this.formData.username,this.formData.password,this.formData.firstName,this.formData.lastName,this.formData.phoneNumber,this.formData.address)
    .subscribe({
      next:data =>{

        this.auth.storedToken(data.idToken);

        console.log("token " + data.idToken );

      },
      error:data =>{
        if (data.error.error.message == "INVALID_USERNAME"){
          this.errorMessage = "Invalid username";

        }else if (data.error.error.message == "USERNAME_exists"){
          this.errorMessage = "username already exist";

        }else{
          this.errorMessage = "Unknown error";
        }
      }
    })

  }

}
