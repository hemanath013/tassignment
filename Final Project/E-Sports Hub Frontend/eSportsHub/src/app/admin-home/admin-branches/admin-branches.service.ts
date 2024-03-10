import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminBranchesService {

  constructor(private http:HttpClient) { }

  getData():Observable<branches>{
    return this.http.get<branches>(environment.grtAllBranchesUrl);

  }

  updateData(branches: branches[]): Observable<any> {
    return this.http.put(`${environment.updateBranchUrl}/${branches[0].branch_id}`, branches);
  }

}

export interface branches{branch_id:string,name:string,location:string,manager:string,phone:string,email:string,editing?: boolean;}
