import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkpassword(pwd:string, cnfpwd:string):ValidatorFn{

    return (control:AbstractControl):ValidationErrors|null =>{

        if(control.get('pwd')?.value===control.get('cnfpwd')?.value)
            return null;
        return {chpwd:true,mismatch:true};
    }
}