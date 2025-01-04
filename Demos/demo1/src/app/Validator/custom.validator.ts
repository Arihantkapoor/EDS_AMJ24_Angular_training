import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidatorService } from "../Service/validator.service";

export function customValidation(validatorService:ValidatorService, num1:number) : ValidatorFn {

    return (control:AbstractControl) : ValidationErrors | null =>{
        
        let flag = validatorService.validationLogic(control.value,num1);

        if(flag){
            return {custom:true};
        }
        return null;
    }
}

