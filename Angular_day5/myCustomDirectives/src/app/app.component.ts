import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // students?: any[];

  // constructor() {
  //   this.students = [
  //     {
  //       id: 1,
  //       name: 'Arihant',
  //       age: 25
  //     },
  //     {
  //       id: 2,
  //       name: 'Aditi',
  //       age: 22
  //     },
  //     {
  //       id: 3,
  //       name: 'Ashish',
  //       age: 23
  //     },
  //     {
  //       id: 4,
  //       name: 'Naman',
  //       age: 24
  //     }
  //   ];
  // }


  // getData():void{
  //   this.students = [
  //     {
  //       id: 1,
  //       name: 'Arihant',
  //       age: 25
  //     },
  //     {
  //       id: 2,
  //       name: 'Aditi',
  //       age: 22
  //     },
  //     {
  //       id: 3,
  //       name: 'Ashish',
  //       age: 23
  //     },
  //     {
  //       id: 4,
  //       name: 'Naman',
  //       age: 24
  //     },
  //     {
  //       id: 5,
  //       name: 'Kishan',
  //       age: 23
  //     },
  //     {
  //       id: 6,
  //       name: 'Gukesh',
  //       age: 18
  //     }
  //   ];
  // }

  // trackByStudentId(index: number, student:any){
  //   return student.id;
  // }

  // fontColor:string = 'Pink';

  // product:boolean = false;


  // addStyle(){
    
  //   return {'font-size.px':'50', 'font-style':'italic', 'color':'blue' };
  // }

  // data: string = "";


  // addClass(){

  //   return {'btn-danger':true, 'btn-lg':true};
  // }

  // color: string;


  condition: boolean = true;
}
