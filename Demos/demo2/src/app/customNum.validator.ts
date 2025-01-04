import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidationService } from "./Validation.service";
import { Injector } from "@angular/core";

export function customNumValidation(num1:number) : ValidatorFn{

    return (control:AbstractControl) : ValidationErrors | null =>{

      let obj =  Injector.create([{
            provide:ValidationService, useClass:ValidationService, deps:[]
        }]);

      let service =  obj.get(ValidationService);

        let flag = service.getValidationLogic(control.value, num1);
        
        if(flag) return {notmatched: true};

        return null;

    }
}