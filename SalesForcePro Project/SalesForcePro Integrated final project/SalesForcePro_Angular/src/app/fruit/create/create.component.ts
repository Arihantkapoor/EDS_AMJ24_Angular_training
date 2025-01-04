import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private fruitService:FruitService, private router:Router){}

  formdata : Fruit = {
    id:0,
    productName:'',
    qty:0,
    price:0,
    productDescription:'',
    isAvailable:'',
    discount:0
  }

  create(){
    this.fruitService.creat(this.formdata).subscribe({
      next:(data)=>{
        this.router.navigate(["/fruit/home"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
