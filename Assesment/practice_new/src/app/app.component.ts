import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './Employee';
import { crossFieldvalidators } from './crossfield.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent implements OnInit {

  empForm!: FormGroup;
  employeeList: Employee[] = [];
  constructor(private fb: FormBuilder, private empService: EmployeeService){}

  ngOnInit(): void {

    this.employeeList = this.empService.getAllEmployees();
    this.empForm = this.fb.group({
      employeeId: ['',[Validators.required,Validators.min(100), Validators.max(999)]],
      employeeName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      employeeEmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },{validators: crossFieldvalidators});
  }


  //getters

  get Id(){
    return this.empForm.get('employeeId');
  }
  get Name(){
    return this.empForm.get('employeeName');
  }

  get Email(){
    return this.empForm.get('employeeEmail');
  }
  get Password(){
    return this.empForm.get('password');
  }
  get ConfirmPassword(){
    return this.empForm.get('confirmPassword');
  }

  onFormSubmit(){
    const empObj: Employee = new Employee(this.Id?.value,this.Name?.value,this.Email?.value,this.Password?.value,this.ConfirmPassword?.value);

    this.empService.addEmployee(empObj);
    this.employeeList = this.empService.getAllEmployees();
    this.empForm.reset();
  }
}
