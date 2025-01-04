import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable()
export class ValidatorService{

    validateNum(control: AbstractControl):ValidationErrors | null {

        const val = control.value;

        if(isNaN(val)){
            return {notNum:true};
        }
        if(val<=10){
            return {notValid:true};
        }
        return null; 
    }
}