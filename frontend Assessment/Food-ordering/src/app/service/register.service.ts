import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "http://localhost:8080/api/auth/register"

  constructor(private http: HttpClient) {

  }

  register(formData: any ): Observable<RegisterResponse> {
    //  console.log(formData);
     
     return this.http.post<RegisterResponse>(this.url,formData);
  }
}

interface RegisterResponse{
 token: string;

}