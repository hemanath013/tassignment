import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  constructor(){}

  ngOnInit(): void {
      let data = {name:"hemanath",age:23}
      this.parentFunction.emit(data);
  }

}
