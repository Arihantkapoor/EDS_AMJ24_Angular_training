import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  customerForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  displayMessage: boolean = false;
  customerCategory?:string;

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerId:['',[Validators.required, Validators.min(10000),Validators.max(99999)]],
      customerName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      customerAddress:['',[Validators.required]],
      customerOrders:['',[Validators.required,Validators.min(0),Validators.max(99999)]]
    });
  }

  //getters for the input form controls

  get Id(){
    return this.customerForm.get('customerId');
  }

  get Name(){
    return this.customerForm.get('customerName');
  }

  get Address(){
    return this.customerForm.get('customerAddress');
  }

  get Orders(){
    return this.customerForm.get('customerOrders');
  }

  onFormSubmit(){
    this.displayMessage = true;
    const val = this.Orders?.value;
    if(val==0){
      this.customerCategory = 'Inactive Customer';
    }
    else if(val>=1 && val<=9){
      this.customerCategory = 'Elite Customer';
    }
    else{
      this.customerCategory = 'Premium Customer';
    }
  }

  


  
}
