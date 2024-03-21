import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  addProduct(formData) {
    return this.http.post<any>(`http://localhost:8080/api/products/create`, formData);
  }
}
