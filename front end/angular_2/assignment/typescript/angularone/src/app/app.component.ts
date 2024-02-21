import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
});
export class AppComponent {
  posts:any;

  parentFunction(data){console.warn(data)}
  
  // constructor(private service:PostService) {}
  
  // ngOnInit() {
  //     this.service.getPosts()
  //       .subscribe(response => {
  //         this.posts = response;
  //       });
  // }
}