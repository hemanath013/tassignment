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
      console.log("yes");
      

      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/cart']);

    }
  }



  storedToken(token:string){
    sessionStorage.setItem('token',token);
  }

}
