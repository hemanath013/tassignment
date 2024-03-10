import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class RegisterComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', [Validators.required, Validators.minLength(3)]],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.email],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', [Validators.required, Validators.minLength(6)]],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.pattern("")],
  });
  
  formData = {username:"",email:"",password:"",address:"",phone:""}
  

  constructor(private _formBuilder: FormBuilder,private registerService:RegisterService,private route:Router) {}
  
  onSubmit(){

  this.formData.username = this.firstFormGroup.controls.firstCtrl.value;
  this.formData.email = this.secondFormGroup.controls.secondCtrl.value;
  this.formData.password = this.thirdFormGroup.controls.thirdCtrl.value;
  this.formData.address = this.fourthFormGroup.controls.fourthCtrl.value;
  this.formData.phone = this.fifthFormGroup.controls.fifthCtrl.value;
  
 
  

    this.registerService.register(this.formData.username,this.formData.email,this.formData.password,this.formData.address,this.formData.phone).subscribe(
      (data) => {
        
        localStorage.setItem("token",data.token);

        this.route.navigate(['/login']);

    },
    (error) => {
      console.error('Registration error:', error);

    }
    
    
    );
   }

   currentStepIndex = 0;
   images: string[] = [
     '/assets/img/ba.jpg',
     '/assets/img/29.jpg',
     '/assets/img/25.jpg',
     '/assets/img/31.jpg',
     '/assets/img/32.jpg',
    
   ];

   onNext() {
    if (this.currentStepIndex < this.images.length - 1) {
      this.currentStepIndex++;
    }
  }
   
    
  }
