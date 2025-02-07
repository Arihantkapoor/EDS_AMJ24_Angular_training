import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private serv:ProductService) { }

 
products:Product[];
  ngOnInit() {
    this.serv.getProducts().subscribe(
      data=>{
        this.products=data;
      }
    )
  }

}
