import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(username:any,email:any,password:any,address:any,phone:any) : Observable<RegisterResponse>{

    const body = {username,email,password,address,phone}
    console.log("ooooo ",body);
    
    return this.http.post<RegisterResponse>(environment.registerUrl,body)

  }
}

interface RegisterResponse{
  token : string;

}
