import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.scss']
})
export class ManagerHeaderComponent {
  Onclick(){
    localStorage.clear();
  }


}
