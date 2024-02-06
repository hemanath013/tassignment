import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated() : boolean {

    if (sessionStorage.getItem('token')!==null){
      return true;
        }
        return false;
    
  }

  canAccess(){
    if(!this.isAuthenticated()){

      this.router.navigate(['/login']);

    }
  }

  

  
  register(username:string , password:string , firstName:string , lastName:string , phoneNumber:string , address:string ){

     return this.http
     .post<{idToken:string}>("localhost:8080/api/auth/register",{username , password , firstName , lastName , phoneNumber , address });

  }

  storedToken(token:string){
    sessionStorage.setItem('token',token);
  }

}
