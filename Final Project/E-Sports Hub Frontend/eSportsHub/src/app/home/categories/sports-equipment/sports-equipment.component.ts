import { Component } from '@angular/core';
import { SportsEquipmentService } from './sports-equipment.service';

@Component({
  selector: 'app-sports-equipment',
  templateUrl: './sports-equipment.component.html',
  styleUrls: ['./sports-equipment.component.scss']
})
export class SportsEquipmentComponent {
  constructor(private service:SportsEquipmentService){
    this.get();
  }
  
   sports:any;
  get() {
    this.service.getData().subscribe((data) => { 
      console.log(data);
      this.sports = data;
    });
  }
  
  }
  
