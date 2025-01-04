import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:"root"
    }
)
export class ValidationService{

    //validation logic
    getValidationLogic(num1:number, num2:number){

        if(num1<=num2) return true;
        return false;
    }
}