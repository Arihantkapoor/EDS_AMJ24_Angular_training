import { Component } from '@angular/core';
import {subscribeService} from '../../../Services/subscription.services';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // providers:[subscribeService]
})
export class ChildComponent {
  constructor(private obj: subscribeService){}
  onSubscribe(){
    // const obj = new subscribeService();
    this.obj.getalert('Monthly');
   }
}
