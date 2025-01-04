import { AbstractControl, ValidationErrors } from "@angular/forms";

export function crossFieldvalidators(control: AbstractControl) : ValidationErrors | null {

    const passwordVal = control.get('password');

    const confirmPasswordVal = control.get('confirmPassword');


   if(passwordVal && confirmPasswordVal && passwordVal.value!==confirmPasswordVal.value){
    return {notmatching: true};
   }

    return null;

}