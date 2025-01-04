import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.loadCities();
  }

  cities:any[] = [];

  loadCities(){
    this.http.get("assets/data.json").subscribe(
      (result:any)=>{
        console.log(result);
        this.cities = result.data;
      },
    (error)=>{
      console.log(error);
    }
  );
  }
}
