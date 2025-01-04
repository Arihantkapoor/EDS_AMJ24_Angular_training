import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjspractice',
  templateUrl: './rxjspractice.component.html',
  styleUrls: ['./rxjspractice.component.css']
})
export class RxjspracticeComponent implements OnInit {

  constructor() { }

  arr:any[] = [];

  obj = new Observable((res)=>{
    res.next(1)
    res.next(2)
    res.next(3)
    res.next(4)
    res.next(5)
    res.next(6)


    res.complete()
  
  }).pipe(

    tap(data=>console.log("tap " + data)),
    map( (val)=>{
      return val as number*3;
    }),
    filter(x=>x>6),

    tap(data=>console.log("tap filter " + data))
    // filter(x=>x%2!==0)


  )


  // obj:Observable<number> = of(1,2,3,4,5,6,7,8,9,10).pipe(
  //   filter(x=>x%2==0)
  // )

 
  ngOnInit() {

    this.obj.subscribe(next=>{
      // this.arr.push(next);
      // console.log(next);
      // console.log(this.arr);
  });

  

  //   this.obj.subscribe(next=>console.log( next), 
  //   err=>console.log(err),
  //   ()=>{
  //     console.log("completed");
  //   }
  // );



  }

}
