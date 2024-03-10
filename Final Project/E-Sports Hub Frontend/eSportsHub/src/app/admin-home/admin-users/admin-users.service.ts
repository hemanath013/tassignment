import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http:HttpClient) { }

  private usera:string = '';


  getData():Observable<user>{
    return this.http.get<user>(environment.grtAllUsersUrl)
  }

  updateData(users: user[]): Observable<any> {
    return this.http.put(`${environment.getOrdersUrl}/${users[0].user_id}`, users);
  }
  // private myUserId = 'userId';

  getUserId(): string{

    this.usera = localStorage.getItem('userId');
    console.log(this.usera);
    
    return this.usera;
    
  } 

  getDa():Observable<user>{
    return this.http.get<user>(`${environment.grtAllUsersUrl}/${this.usera}`)

  }
}
export interface user{user_id:string,username:string,email:string,address:string,phone:string,role:string,editing?: boolean;}
