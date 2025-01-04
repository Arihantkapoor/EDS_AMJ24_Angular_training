import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  css1:string = 'primary big';

  css2 = ['secondary','italic'];

  css3 = {
    pink:true,
    big:true,
    italic:true
  }

  constructor() { }

  ngOnInit() {
  }

}
