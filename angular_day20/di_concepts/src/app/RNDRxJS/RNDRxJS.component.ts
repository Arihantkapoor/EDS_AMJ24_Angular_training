import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, observable, Observable, of,from, map, switchMap, timeInterval, interval } from 'rxjs';

@Component({
  selector: 'app-RNDRxJS',
  templateUrl: './RNDRxJS.component.html',
  styleUrls: ['./RNDRxJS.component.css']
})
export class RNDRxJSComponent implements AfterViewInit, OnDestroy, OnInit {
  
  
  @ViewChild('btn') button:ElementRef;

  ObservableObj:Observable<any>;


  ngAfterViewInit(): void {
    this.ObservableObj = fromEvent(this.button.nativeElement,'click');

    this.switchDemo().subscribe(data=>console.log(data))
   

  }

  switchDemo(){
   return this.ObservableObj.pipe(
      switchMap(()=>{
        return interval(500);
      })
    )
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // Observable.create((data:any)=>{
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);

    //   data.complete();
    // }).subscribe((val:any)=>console.log(val), (err:any)=>console.log(err), ()=>console.log('complete'));
    

    // const a1 = [1,2,3,4,5,6,7];
    // const a2 = ['a','b','c','d','e','f','g'];

    // // const a3 = of(a1,a2);
    // const a3 = of(100,[1,2,3,4],'Aditi');

    // a3.subscribe(data=>console.log(data),err=>console.log(err),()=>console.log('completed'))


    // const a5 = from('Hello world');

    // let mymap = new Map();
    // mymap.set(0,'Hello').set(1,'Moto');

    // const a6 = from(mymap);

    // const a7 = from(new Promise((resolve)=>{
    //   resolve('Hello Moto');
    // }))


    // a7.subscribe(data=>console.log(data),err=>console.log(err),()=>console.log('completed'))


    //SwitchMap
    // let sourceObservable =  of(1,2,3,4);
    // let innerObservable = of('A','B','C');


    // sourceObservable.pipe(
    //   switchMap(data=>
    //     {
    //       console.log("source value " + data);
    //       console.log("starting new observable");
    //       return innerObservable;
    //     }
    //   )
    // ).subscribe(value=>console.log("received " + value));


  
  }



  





  // @ViewChild('btn') button: ElementRef;
  // @ViewChild('inpt') input: ElementRef;

  
  // observableObj:any;


  // constructor() { }

  // ngAfterViewInit(): void {
  //   this.buttonClick();

  //   fromEvent(this.input.nativeElement,'keyup').subscribe(data=>console.log(data));
  //   fromEvent(window,'scroll').subscribe(data=>console.log(data));
  // }

  // ngOnDestroy(): void {
  //   this.observableObj.unsubscribe();
  // }


  // buttonClick(){
  //  this.observableObj =  fromEvent(this.button.nativeElement,'click').subscribe(data=>console.log(data));
  // }


 

}
