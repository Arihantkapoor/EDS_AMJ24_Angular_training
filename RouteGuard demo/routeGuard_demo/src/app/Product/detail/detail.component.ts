import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private serv:ProductService,
    private activeRoute:ActivatedRoute
  ) { }
  product:Product | undefined;
  id :any;
  ngOnInit() {
    // alert("hi");
    this.activeRoute.paramMap.subscribe(
      data=>{
       
        this.id=data.get('id');
        console.log(this.id);
        
      }
    )
    this.serv.getProductById(this.id).subscribe(
      data=>{
        this.product=data;
        console.log(this.product);
        
      }
    )
  }

}
