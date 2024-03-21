import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {



  constructor(private http:HttpClient) { }
  getData():Observable<products[]>{
    return this.http.get<products[]>(`${environment.baseUrl}/api/products`);

  }

  updateData1(products: products): Observable<any> {
    // Assuming branches[0] contains the branch data to be updated
    return this.http.put(`${environment.baseUrl}/api/products/${products.id}`, products);
  }



  updateData(products: FormData): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/products/update`, products);
  }

}

export interface products{id:string,product_id:string,name:string,description:string,price:number,category:string,brand:string,totalStock:number,branchDetails:[],editing?: boolean,image:string,getNameCount:number}

export interface BranchDetails {
  branchId: string;
  location: string;
  stockQuantity: number;
}