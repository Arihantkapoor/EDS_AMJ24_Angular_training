import { AbstractControl, ValidationErrors } from "@angular/forms";

export function gte(control:AbstractControl):ValidationErrors|null{


    const val = control.value;

    if(isNaN(val)){
        return {gte:true,reqValue:10}
    }

    if(val<=10){
        return {gte:true, reqValue:10}
    }

    return null;
}