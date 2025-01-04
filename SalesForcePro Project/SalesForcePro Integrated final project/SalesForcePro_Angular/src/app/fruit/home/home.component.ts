import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ProductComponent implements OnInit{

  allFruits:Fruit[] = []

  constructor(private fruitService:FruitService){

  }
  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data)=>{
      this.allFruits = data;
      // console.log(data)
      // console.log(this.allFruits)
    })
  }

  deleteItem(id:number){
    this.fruitService.delete(id).subscribe({
      next:(data)=>{
        this.allFruits = this.allFruits.filter(_ => _.id != id)
      },
    })
  }
  



}
