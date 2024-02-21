import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:8080/api/auth/login"

  constructor(private http:HttpClient) {}

  login(formData:any): Observable<LoginResponse>{
    console.log(formData);
     
    return this.http.post<LoginResponse>(this.url,formData);


  }

 

}

interface LoginResponse{
  token: string;
 
 }