import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = 'Arihant';

  search?: string;

  ngNameChanged(name: any){
    this.search = name;
    console.log("ngModelChange: " + name);
    
  }

  domNameChanged(name: any){
    this.search = name.target.value;
    console.log("DomChange: " + name.target.value);
    
  }

  isValid = true;


  changeValue(flag:boolean){
    this.isValid = flag;

  }

  data3:number = 101;
}
