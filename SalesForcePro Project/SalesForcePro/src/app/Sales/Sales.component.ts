import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesService } from '../Service/Sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Sales',
  templateUrl: './Sales.component.html',
  styleUrls: ['./Sales.component.css']
})
export class SalesComponent implements OnInit {

  salesForm: FormGroup;
  salesData:any[] = [];
  salesRevenue: number = 0;
  constructor(private fb: FormBuilder, private slsServ:SalesService,private router: Router) {
    
   }

  ngOnInit() {
    this.salesForm = this.fb.group({
      Customer_Id:[''],
      CustomerName:['',[Validators.required]],
      Product_Id:[''],
      ProductName:['',[Validators.required]],
      ProductPrice:['',[Validators.required]],
      sellquantity:['',[Validators.required]],
      selldate:[new Date().toISOString().slice(0,10)]
    });

    this.GetAllSales();
  }

  GetAllSales(){
    this.slsServ.GetAllSales().subscribe(
      (data:any)=>{
        this.salesData = data;
        console.log(typeof this.salesData);
        console.log(this.salesData);
        console.log(this.salesData.length);
        this.GetRevenue();
      }
    )
  }

  GetRevenue(){
    for(var i in this.salesData){
      var value = Number(this.salesData[i].productPrice) * Number(this.salesData[i].sellquantity);
      this.salesRevenue += value;
    }
    console.log(this.salesRevenue);
  }

  submitForm(form:any){
    if(this.salesForm.valid){
      console.log(this.salesForm.value);
      this.slsServ.AddSales(this.salesForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          if(data.CustomerName!=''){
            alert('Sales Details added successfully!');
            this.salesForm.reset();
            this.GetAllSales();
          }
          else{
            alert('Please enter correct details');
          }
        }
      )
    }
  }
  get CustomerName(){
    return this.salesForm.get('customer_name');
  }
  get ProductName(){
    return this.salesForm.get('product_name');
  }
  get Price(){
    return this.salesForm.get('product_price');
  }
  get Quantity(){
    return this.salesForm.get('sellquantity');
  }
}
