import { AbstractControl, ValidationErrors } from "@angular/forms";

export function customAdmin(control:AbstractControl):ValidationErrors|null{


    const val = control.value;

    if(val=="Admin"){
        return {customAdmin:true,reqValue:"Admin"}
    }

    return null;
}