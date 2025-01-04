import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
