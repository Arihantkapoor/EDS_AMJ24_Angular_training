import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(
    private fruitService:FruitService,
    private router:Router,
    private route:ActivatedRoute
  ){}


  formdata : Fruit = {
    id:0,
    productName:'',
    qty:0,
    price:0,
    productDescription:'',
    isAvailable:'',
    discount:0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.fruitService.edit(id).subscribe((data)=>{
      this.formdata = data;
    })
  }


  update(){
    this.fruitService.update(this.formdata).subscribe({
      next:(data)=>{
        this.router.navigate(["/fruit/home"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
