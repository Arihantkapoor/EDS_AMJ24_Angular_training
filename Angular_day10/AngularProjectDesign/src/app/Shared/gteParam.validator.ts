import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function gteParam(num:number):ValidatorFn{

return (control:AbstractControl):ValidationErrors|null =>{


    const val = control.value;

    if(isNaN(val)){
        return {gteParam:true,reqValue:num}
    }

    if(val<=num){
        return {gteParam:true, reqValue:num}
    }

    return null;
}
}
