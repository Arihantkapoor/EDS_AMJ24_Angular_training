import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../Service/Product.service';
import { CustomerService } from '../Service/Customer.service';
import { Leads } from '../Model/Leads';

@Component({
  selector: 'app-LeadForm',
  templateUrl: './LeadForm.component.html',
  styleUrls: ['./LeadForm.component.css']
})
export class LeadFormComponent implements OnInit {

  ProductNames:any[]=[];
  leadForm:any;
  InvalidForm:boolean=false;
  constructor(private fb:FormBuilder,private productserv:ProductService,private custserv:CustomerService) { }

  ngOnInit() {
    this.leadForm=this.fb.group({
      LeadName:['',[Validators.required]],
      Interest:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      LeadAddress:['',[Validators.required]],
    })
    this.productserv.getAllProducts().subscribe(
      (data:any)=>{
        this.ProductNames=data
        console.log(data);
      }
    )
  }
   obj:Leads;

  OnSubmit(){
    if(this.leadForm.valid){
      console.log(this.leadForm.value.Name)
      this.InvalidForm=false;
      this.obj=this.leadForm.value;
      this.obj.Contacted="0";
      this.custserv.PostLeads(this.obj).subscribe(
        data=>{
          console.log(data)
          alert("Lead added successfully!");
        },
        error=>{
          console.log(error)
        }
      )
    
      this.leadForm.reset();

    }
    else{
      this.InvalidForm=true;

      console.log("invalid")
    }
  }


}
