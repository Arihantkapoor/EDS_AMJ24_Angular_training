import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('ele') button_obj: ElementRef;
  @ViewChild(ChildComponent) child_obj: ChildComponent;
  count = 0;

  isDestroy = true;
  fun(){
    this.count++;
  }


  ngOnInit(): void {
    
    console.log("ngOnInit  ", this.button_obj);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit  ", this.button_obj);
    this.button_obj.nativeElement.innerHTML = 'Changed value';
  
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: ", this.child_obj.inc);
    // console.log(this.button_obj);
  }

  showHide(){
    this.isDestroy = !this.isDestroy;
  }

  

  
}
