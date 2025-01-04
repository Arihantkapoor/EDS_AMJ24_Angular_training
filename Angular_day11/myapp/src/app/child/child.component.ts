import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy, OnInit {

  inc = 0;
  time: any;
  fun_child(){
    this.inc++;
  }
  ngOnInit(): void {
    this.Timer();
    console.log("child component is created");
  }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log("child component is destroyed");
  }
  Timer():void{
     this.time = setInterval(()=>{
      this.inc++;
      console.log(this.inc);
      
    },1000);
  }
}
