import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {
  constructor(private http:HttpClient) { }

  getAllUsers(){
  
    return this.http.get<any>(environment.getallAdminUsersUrl);
  }
}

interface getAllUsers{ restaurantId:string,name:string, description:string,location:string,cuisine:string}
