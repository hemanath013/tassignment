import { Component } from '@angular/core';
import { HealthFitnessService } from './health-fitness.service';

@Component({
  selector: 'app-health-fitness',
  templateUrl: './health-fitness.component.html',
  styleUrls: ['./health-fitness.component.scss']
})
export class HealthFitnessComponent {
  constructor(private service:HealthFitnessService){
    this.get();
  }
  
  
  
   health:any;
  get() {
    this.service.getData().subscribe((data) => { 
      console.log(data);
      this.health = data;
    });
  }
  
  }
  
