import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private searchValueSubject = new Subject<string>();
  searchValue$ = this.searchValueSubject.asObservable();

  constructor() { }

  setSearchValue(value: string) {
    this.searchValueSubject.next(value);
  }
}
