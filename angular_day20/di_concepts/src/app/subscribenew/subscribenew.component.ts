import { HttpClient } from '@angular/common/http';
import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, delay, forkJoin, interval, map, of, retry, retryWhen, throwError } from 'rxjs';

@Component({
  selector: 'app-subscribenew',
  templateUrl: './subscribenew.component.html',
  styleUrls: ['./subscribenew.component.css']
})
export class SubscribenewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // ngOnInit() {

  //   of('Hound','Mastiff','Retriever').pipe(
  //     concatMap((breed:any)=>{
  //       const url = 'https://dog.ceo/api/breed/hound/list';
  //       return this.http.get<any>(url);
  //     })
  //   ).subscribe(data=>console.log(data));
  // }

    //   of('Hound','Mastiff','Retriever').pipe(
    //   concatMap((breed:any)=>{
    //     const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    //     const url1 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

    //     let a1 = this.http.get<any>(url);
    //     let a2 = this.http.get<any>(url1);

    //     return forkJoin(a1,a2);
    //   })
    // ).subscribe(data=>console.log(data));
  // }

  // ngOnInit(): void {
  //   of(1, 2, 3).pipe(
  //     concatMap((id: any) => {
  //       const url = 'https://jsonplaceholder.typicode.com/users'+ '/' +id;
  //       const url1 = 'https://jsonplaceholder.typicode.com/todos'+ '/' +id;
  //       let a= this.http.get(url);
  //       let a1= this.http.get(url1);        
 
  //       return forkJoin(a,a1);        
  //     })
  //   ).subscribe(data => console.log(data));
 
  // }

  ngOnInit(): void {
  //   of(1,2,3).subscribe(id=>{
  //     const url = 'https://jsonplaceholder.typicode.com/users'+ '/' +id;
  //     this.http.get<any>(url).subscribe(data=>console.log(data));
  //   })


    // interval(1000).pipe(
    //   map(
    //     val=>{
    //       if(val>2) throw new Error('Invalid value');
    //       return val;
    //   }
    // ),
    // // retry(2)
    // retryWhen(error=>error)
    // ).subscribe(
    //   val=>console.log(val), 
    //   error=>console.log(error), 
    //   ()=>console.log('completed')
    // )


    forkJoin(
      {
        source1: of('hello'),
        source2: of('world').pipe(
          delay(1000)
        ),
        source3: throwError('error occurred').pipe(
          catchError(err=>of(err))
        )
      }
    ).subscribe(val=>console.log(val));
  }




}
