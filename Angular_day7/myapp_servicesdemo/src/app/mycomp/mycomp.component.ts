import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyPipePipe, MyPipePipe1 } from '../myPipe.pipe';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
  providers: [DatePipe, MyPipePipe, MyPipePipe1]
})
export class MycompComponent  {

  name = "This is Angular Training by HCL Tech";
  name2?: string;
  name3 = this.name;
  // temp?;
  // constructor(private datepipe: DatePipe) {
  //   this.temp = this.datepipe.transform(new Date,'fullDate'); //using pipes in .ts file

  //  }

  constructor(private mypipe: MyPipePipe, private mypipe1: MyPipePipe1){
    this.name2 = this.mypipe.transform(this.name,1,15);
    this.name3 = this.mypipe1.transform(this.name,0);
  }

  getString(){
    this.name2 = this.name;
  }
} 
