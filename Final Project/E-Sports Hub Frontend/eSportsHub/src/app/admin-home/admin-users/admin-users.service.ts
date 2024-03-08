import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http:HttpClient) { }


  getData():Observable<user>{
    return this.http.get<user>(environment.grtAllUsersUrl)
  }
}
export interface user{_id:string,user_id:string,username:string,email:string,address:string,phone:string,role:string}
