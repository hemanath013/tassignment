import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 constructor(private router:Router,private nav:NavbarService){}

 @Output() eventTrigger = new EventEmitter<string>();
  
  Onclick(){
    this.router.navigate(['/categories'])

  }

  searchTrigger(event:any) {
    const searchValue = event.target.value;
    this.nav.setSearchValue(searchValue);
  }

  // text = document.querySelector(".serchy");





}