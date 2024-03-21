import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginComponent } from '../login/login.component';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  


  constructor(private http:HttpClient) { }

  login(formData:any):Observable<LoginResponse>{
    
    return this.http.post<LoginResponse>(`${environment.baseUrl}/api/auth/login` , formData);
     

  }

  isAuthenticated() : boolean{
    if(localStorage.getItem('isLogin') === 'true'){
      return true;
    }
    else{
      return false;
    }
 }
}

export interface LoginResponse{
  id:string;
  role:string;
  token:string;
}