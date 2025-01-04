import { Component } from '@angular/core';
import { GlobalService } from './Service/Global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  loggedin=false;
  constructor(public global: GlobalService){
    
  }
}
