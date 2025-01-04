import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  condition: boolean = true;

  employees: any[] = [
    {
      "id": 1,
      "name":"Arihant",
      "salary": 28000,
      "dob":"14-01-2000",
      "gender": "male"
    },
    {
      "id": 2,
      "name":"Aditi",
      "salary": 28000,
      "dob":"15-01-2002",
      "gender": "Female"
    },
    {
      "id": 3,
      "name":"Aman",
      "salary": 38000,
      "dob":"16-01-2000",
      "gender":"male"
    },
    {
      "id": 4,
      "name":"Harsh",
      "salary": 28000,
      "dob":"18-07-2000",
      "gender":"male"
    },
    {
      "id": 5,
      "name":"Srikant",
      "salary": 28000,
      "dob":"11-03-2001",
      "gender":"male"
    }
  ];

  value:string = 'Angular Training';


  student = [
    {
      "id": 1,
      "name":"Arihant",
    },
    {
      "id": 2,
      "name":"Kishan",
    },
    {
      "id": 3,
      "name":"Aditi",
    },
    {
      "id": 4,
      "name":"Naruto",
    },
  ]

  TodayDate = Date();


  obj = {
    c:222,
    b:102,
    a:209,
    'arihant': 234,
    12: 98798
  }


  data: number = 2;
}
