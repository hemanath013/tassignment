import { Component } from '@angular/core';
import { AccessoriesService } from './accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent {

  constructor(private service:AccessoriesService) {
    this.get()
  }

  access:any;

  get(){
     this.service.getData().subscribe((data) => {
      console.log(data);
       this.access = data;

     });
  }

}
