import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  

  constructor(private http:HttpClient) { }

  login(formData:any):Observable<LoginResponse>{
    console.log(formData);
    
    return this.http.post<LoginResponse>(environment.loginUrl,formData);

  }
}
interface LoginResponse{
  token: string;
 
 }