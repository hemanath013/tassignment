import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminBranchesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<branches[]> {
    return this.http.get<branches[]>(`${environment.baseUrl}/branches`);
  }

  updateData(branches: branches): Observable<any> {
    // Assuming branches[0] contains the branch data to be updated
    return this.http.put(`${environment.baseUrl}/branches/${branches.id}`, branches);
  }

}

export interface branches {
  id: string;
  branch_id: string;
  name: string;
  location: string;
  manager: string;
  phone: string;
  email: string;
  editing?: boolean;
}

