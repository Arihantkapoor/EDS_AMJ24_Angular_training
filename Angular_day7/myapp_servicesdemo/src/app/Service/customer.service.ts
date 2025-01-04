import { Injectable } from "@angular/core";
import { customer } from "../Model/customer";

@Injectable()
export class CustomerService{

    getCustomerDetails():customer[]{
        return [
            {
                "id": 1,
                "name":"Arihant",
                "salary":23400
            },
            {
                "id":2,
                "name":"Aditi",
                "salary":34090
            },
            {
                "id": 3,
                "name":"Karan",
                "salary":43400
            },
            {
                "id":4,
                "name":"Shyam",
                "salary":32489
            },
        ]
    }
}