import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnChanges {

 @Input() abc = 0;
 @Input() abc1 = false;

 constructor(){
  console.log("I am child constructor");
 }

 ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
 }

}
