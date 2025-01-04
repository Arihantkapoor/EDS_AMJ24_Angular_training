import { Component } from '@angular/core';

@Component({
  selector: 'app-Pipes',
  templateUrl: './Pipes.component.html',
  styleUrls: ['./Pipes.component.css']
})


export class PipesComponent  {

    
  employees: any[] = [
    {
      id: 1,
      name: 'Arihant',
      salary: 20000,
      // gender: 'Male',
    },
    {
      id: 2,
      name: 'Aditi',
      salary: 30000,
      // gender: 'female'
    },
    {
      id: 3,
      name: 'Kishan',
      salary: 25000,
      // gender: 'male'
    },
    {
      id: 4,
      name: 'Aastik',
      salary: 28000,
      // gender: 'male'
    }
  ];

   obj = {
    a:765,
    b:87,
    c:9065
   }

   

   value = 234;
}
