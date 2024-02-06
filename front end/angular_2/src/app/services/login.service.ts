import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:8080/api/auth/login"

  constructor(private http: HttpClient) {

   }

   login(formData: any ): Observable<loginResponse> {
      
      return this.http.post<loginResponse>(this.url,formData);
   }
}

interface loginResponse{
  token: string;

}
