import { Component, ViewEncapsulation } from '@angular/core';

import { faCoffee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  color:string = 'red';
  size:number = 16;
  title = 'app component';
  flag = false;

  faCoffee = faCoffee;
  getColor(){
    return 'yellow'
  }
}
