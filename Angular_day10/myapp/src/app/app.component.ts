import { Component, OnInit } from '@angular/core';
import { Customer } from './Model/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  value: string = 'Starting name';
  AddressCounter:string = 'India';
  public obj1: Customer = {
    id: 1,
    name: 'Arihant'
  }
  constructor(){
    console.log("I am parent component");
  }

  ngOnInit(): void {
      console.log("ngOnInit from parent component");
      
  }
  count = 0;
  fun(){
    this.count++;
    this.obj1.id = this.count;
    // this.obj1 = {
    //   id: this.count,
    //   name: 'Arihant'
    // }

    this.AddressCounter = this.AddressCounter + this.count++;
  }

}
