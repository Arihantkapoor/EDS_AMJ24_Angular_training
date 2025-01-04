import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  count = 0;

  test = false;

  constructor(){
    console.log("I am parent constructor");
  }
  fun(){
    this.count++;
    this.test = !this.test;
  }
}
