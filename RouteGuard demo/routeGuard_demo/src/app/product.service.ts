import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor() { 

  this.products=[
    new Product(1,'toy',500),
    new Product(2,'mobile',1500),
    new Product(3,'TV',6500),
    new Product(4,'watch',1700),
    new Product(5,'Laptop',5000),

  ]
}

products:Product[]

product:Product|undefined;

getProducts():Observable<Product[]>{
  return of(this.products);
}

getProductById(id:number):Observable<Product | undefined> {
  this.product=this.products.find(x=>x.id==id)
  return of(this.product);
}

}
