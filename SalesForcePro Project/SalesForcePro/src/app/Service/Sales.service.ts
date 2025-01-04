import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SalesService{
    constructor(private http: HttpClient){}

    AddSales(form:any){
        return this.http.post('http://localhost:5144/api/Sales/AddSale',form);
    }

    GetAllSales(){
        return this.http.get('http://localhost:5144/api/Sales/GetAllSales');
    }
}