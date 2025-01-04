import { Component } from '@angular/core';
import { CustomerService } from './Service/customer.service';
import { customer } from './Model/customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]   //Sending to IOC container -> per call
 })
export class AppComponent {

  details:customer[] = [];

  constructor(private obj: CustomerService){

  }
  
  showdata(){
    // let obj = new CustomerService();
    this.details = this.obj.getCustomerDetails();
  }
}
