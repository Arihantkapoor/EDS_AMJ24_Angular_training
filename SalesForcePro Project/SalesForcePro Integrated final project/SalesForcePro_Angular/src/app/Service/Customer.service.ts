import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


constructor(private http:HttpClient){}

getAllCustomer(){
  return this.http.get('http://localhost:5144/api/Dashboard')
 
}

PostLeads(obj:any){
  return this.http.post('http://localhost:5144/api/Dashboard',obj)
}

GraphData(){
  return this.http.get('http://localhost:5144/api/Dashboard/GraphData')
}

updatelead(obj:any){
  return this.http.put('http://localhost:5144/api/Dashboard',obj)
}

}
