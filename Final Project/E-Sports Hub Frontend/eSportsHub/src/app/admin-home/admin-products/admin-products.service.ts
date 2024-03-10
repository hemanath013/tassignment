import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {



  constructor(private http:HttpClient) { }
  getData():Observable<products>{
    return this.http.get<products>(environment.productGetUrl);

  }
  updateData(products: products[]): Observable<any> {
    return this.http.put(`${environment.getOrdersUrl}/${products[0].product_id}`, products);
  }

  

}

export interface products{product_id:string,name:string,description:string,price:number,category:string,brand:string,totalStock:number,branchDetails:[],editing?: boolean,image:string}

export interface BranchDetails {
  branchId: string;
  location: string;
  stockQuantity: number;
}