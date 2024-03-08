import { Component } from '@angular/core';
import { CyclingService } from './cycling.service';

@Component({
  selector: 'app-cycling',
  templateUrl: './cycling.component.html',
  styleUrls: ['./cycling.component.scss']
})
export class CyclingComponent {
constructor(private service:CyclingService){
  this.get();
}



 cycle:any;
get() {
  this.service.getData().subscribe((data) => { 
    console.log(data);
    this.cycle = data;
  });
}

}
