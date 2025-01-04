import { Component } from '@angular/core';
import { employee } from './model/employee';
import { employeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  path:string = "../assets/images/watch.png";

  firstName = 'Arihant';

  lastName = 'Kapoor';

  isdisabled = false;

  title = "Property Binding";

  colspan = 3;

  border = 1;

  obj:employee[] = [];

  showData():void{

    let EmpObj = new employeeService();
    this.obj = EmpObj.getEmployeeData();
  }

  getData():string{
    return "Employee";
  }
  

  max(n1:number,n2:number):number{


    return Math.max(n1,n2);
  }

  getFirstName():string{
    return this.firstName;
  }

  getLastName():string{

    return this.lastName;
  } 

  Fmouse():void{
    alert("just a textbox");
  }


}
