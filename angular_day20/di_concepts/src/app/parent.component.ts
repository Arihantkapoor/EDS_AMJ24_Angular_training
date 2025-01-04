import { Component } from '@angular/core';
import { RandomService } from './Services/randomService.service';

@Component({
  selector: 'app-parent',
  template: `<div><p>Parent Component => {{randomVal}}</p></div>
  <app-child>
    <strong><h1>Projected Content</h1></strong>
    <app-grandchild></app-grandchild>
  </app-child>
  <br><br><br>`

  
})

export class ParentComponent {

    randomVal = 0;
    constructor(private serv: RandomService){
        this.randomVal = serv.getRandomNumber;
    }

   
}
