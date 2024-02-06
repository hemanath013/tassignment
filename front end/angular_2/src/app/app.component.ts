import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_2';
  
//   va: number;


//   constructor(private demoService: DemoService){
// this.va = demoService.count;
// // console.log( _.chunk([1, 2, 3, 4,34,43,5335,654,6543], 2));
// // console.log( _.reverse([1, 2, 3, 4,34,43,5335,654,6543]));
// // console.log(_.upperCase('skmkcmkcmk----dcn dnc'));



// //   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// //   console.log( moment.locale() );
// //   console.log(moment().format('LT') );
// //   console.log(moment().format('LTS') );
// //   console.log(moment().format('L') );
// //   console.log(moment().format('l')   );

// //   const a:number[] = [1,2,3,4,5,6];
// //  if (!Array.prototype.myMap){
// //   Array.prototype.myMap = function(fn) {

// //     const result = [];
// //   return result;
// //   }
// //  }

//   // a.myMap(item => item * 2)
  
//   }
}
