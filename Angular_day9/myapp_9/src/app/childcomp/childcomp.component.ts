import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css'],
  // providers: [EventEmitter]
})
export class ChildcompComponent {

  @Output() changeEvent: EventEmitter<string> = new EventEmitter();
  // EventEmitter class will emit the custom events, but this event will reach to parent by
  // @Output Parameter
   

  // constructor(private changeEvent: EventEmitter<string>){

  // } 

  // @Output() cEvent = this.changeEvent;
  

  

}
