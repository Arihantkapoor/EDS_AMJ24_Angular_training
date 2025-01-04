import {employee } from '../model/employee';

export class employeeService{

    getEmployeeData():employee[]{

        // let obj = new employee();
        // obj.id = 101;
        // obj.name = 'Arihant';
        // obj.age = 25;
        // return obj;
        
        // let obj: employee[] = [
        //     {
        //         "id": 1,
        //         "name": "Arihant",
        //          "age" : 25
        //     },
        //     {
        //         "id": 2,
        //         "name": "Aditi",
        //         "age": 22
        //     },
        //     {
        //         "id": 3,
        //         "name": "Kishan",
        //         "age": 23
        //     },
        //     {
        //         "id": 4,
        //         "name": "Rama",
        //         "age": 21
        //     }
        // ];
       let obj:employee[] = [
        new employee(1,'Arihant',24),
        new employee(2,'Aditi',21),
        new employee(3,'Kishan',23),
        new employee(4,'Rama',23)
       ];

        return obj;
    }
}