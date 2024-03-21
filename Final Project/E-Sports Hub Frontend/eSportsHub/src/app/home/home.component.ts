import { Component } from '@angular/core';
import { ProductcardsService } from './productcards/productcards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private productCardService: ProductcardsService) {}

  searchedValue(event: string) {  
    console.log(event);
    
    // this.productCardService.getData(event).subscribe({
    //   next: (response) => {
    //     console.log(response);
        
    //   }
    // })
  }
}
