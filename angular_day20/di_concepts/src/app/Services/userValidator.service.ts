import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ValidationService } from "./validators.service";

@Injectable()
export class userValidatorService{

    constructor(private serv: ValidationService){}
    customValidation(control: AbstractControl) : ValidationErrors | null {

        const val = control.value;

       let flag = this.serv.getValidationLogin(val,10);
       
       if(flag){
        return {notMatched: true};
       }

        return null;

    }
}