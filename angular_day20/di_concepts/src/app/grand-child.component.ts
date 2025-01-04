import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { RandomService } from './Services/randomService.service';

@Component({
  selector: 'app-grandchild',
  template: `<div><p>Grand Child Component => {{randomVal}}</p></div>
  <br><br><br>`,
  


})

export class GrandChildComponent {

    randomVal = 0;
    constructor( private serv: RandomService){
        this.randomVal = serv?.getRandomNumber;
    }

   
}

