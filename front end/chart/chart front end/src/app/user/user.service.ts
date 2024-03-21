import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersBetweenDates(): Observable<user[]> {
    return this.http.get<user[]>("http://localhost:8080/api/users");
  }
}

export interface user {
  userName: string;
  latitude: number;
  longitude: number;
  district: string;
  userId: string;
  date: string; 
}

