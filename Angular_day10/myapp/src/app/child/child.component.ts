import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, Input,  OnChanges, OnInit, QueryList, SimpleChanges} from '@angular/core';
import { Customer } from '../Model/customer';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{

  @Input() a?:number;

  @Input() obj?: Customer;

  // @ContentChild('prop') xyz?: ElementRef;
  @ContentChildren('prop') xyz?: QueryList<any>;

  @ContentChild(AddressComponent) addr?: AddressComponent;
  constructor(){
    console.log("I am child component");
  }

  ngOnChanges(changes: SimpleChanges): void {
      // for(let x in changes){
        
      //   const change = changes[x];
      //   const currentVal = change.currentValue;
      //   console.log(currentVal);


      //   console.log(change.firstChange);
      //   console.log(change.isFirstChange);
      //   console.log(change.previousValue);

      // }
    console.log(changes);

  }

  ngOnInit(): void {
  //  console.log(this.dataReceived);
   
    console.log("ngOnInit fro mchild component");
  }


  ngDoCheck(): void {
    console.log("NgDoCheck: ", this.obj);
    
  }

  ngAfterContentChecked(): void {
    console.log("after content checked ")
    console.log(this.addr?.address);
  }

  ngAfterContentInit(): void {
    console.log("after content Init ")
    // console.log(this.xyz?.nativeElement);
    // console.log(this.xyz);
    console.log(this.addr?.address);
  }


}
