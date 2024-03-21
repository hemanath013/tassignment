import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<string[]>('http://localhost:8080/api/products/new').subscribe(
      data => {
        const uniqueCategories = new Set<string>();
        data.forEach(item => {
          const parsedItem = JSON.parse(item);
          uniqueCategories.add(parsedItem.category);
        });
        this.categories = Array.from(uniqueCategories);
        // console.log(this.categories);
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  navigateToCategory(category:any){
    // console.log("working");
    // console.log("Navigating to category:", category);
    this.router.navigate(['/category', category]);
  }
  
  
}