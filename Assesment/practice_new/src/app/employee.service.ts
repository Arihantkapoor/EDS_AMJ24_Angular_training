import { Injectable } from "@angular/core";
import { Employee } from "./Employee";

@Injectable()
export class EmployeeService{

    employeeList: Employee[] = [
        {
            emp_id : 141,
            emp_name: 'Arihant',
            emp_email: 'arihant.kapoor@hcltech.com',
            password: 'Yagi@#14',
            confirmPassword: 'Yagi@#14'
        },
        {
            emp_id: 145,
            emp_name: 'Aditi',
            emp_email: 'aditi.shar@hcltech.com',
            password: 'Panda@#15',
            confirmPassword: 'Panda@#15'
        }
    ];

    addEmployee(emp:Employee):void{
        this.employeeList.push(emp);
    }

    getAllEmployees():Employee[]{
        return this.employeeList;
    }


}