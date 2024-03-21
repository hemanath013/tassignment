import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http:HttpClient) { }

  private   usera:string = '';


  getData():Observable<user[]>{
    return this.http.get<user[]>(`${environment.baseUrl}/api/users`)
  }

  updateData(user: user): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/users/${user.id}`, {"id":user.id , "user_id":user.user_id ,"username": user.username ,"email": user.email,"address":  user.address,"phone":  user.phone,"role":  user.role,"editing":user.editing});
  }

  getUserId(): string{

    this.usera = localStorage.getItem('userId');
    // console.log(this.usera);
    
    return this.usera;
    
  } 

  getDa():Observable<user>{
    return this.http.get<user>(`${environment.baseUrl}/api/users/${this.usera}`)

  }
}
export interface user{id:string,user_id:string,username:string,email:string,address:string,phone:string,role:string,editing?: boolean;}
