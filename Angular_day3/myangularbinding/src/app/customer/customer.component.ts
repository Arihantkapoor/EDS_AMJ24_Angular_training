import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  hei=100;
  wid=200;
  v:boolean;
   
  changeh(h:any){
    this.hei=h;
  console.log(h);
  }
  changew(w:any){
    this.wid=w;
    console.log(w);
  }
  isvalid(flag:boolean){
    this.v=flag;
   
  }

  // hei = 100;
  // wid = 200;
  // v:boolean;

  // changeh(h:any){
  //   this.hei = h;
  //   console.log(this.hei);
  // }

  // changew(w:any){
  //   this.wid = w;
  //   console.log(this.wid);
  // }


  // isValid(flag:boolean){
  //   this.v = flag;
  //   console.log(this.v);
  // }
}
