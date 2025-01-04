import { Component } from '@angular/core';
import { RandomService } from './Services/randomService.service';

@Component({
  selector: 'app-child',
  template: `<div><p>Child Component => {{randomVal}}</p></div>
  <ng-content></ng-content>
  <!-- Here the content child will be placed -->
  <strong>View Child</strong>
  <app-grandchild></app-grandchild>
  <div><br><br></div>`,


  viewProviders:[RandomService]
})

export class ChildComponent {

    randomVal = 0;
    constructor(private serv: RandomService){
        this.randomVal = serv.getRandomNumber;
    }

   
}
