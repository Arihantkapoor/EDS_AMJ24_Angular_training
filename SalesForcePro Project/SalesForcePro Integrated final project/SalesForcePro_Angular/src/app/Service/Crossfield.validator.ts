import { AbstractControl, ValidationErrors } from "@angular/forms";

export function crossFieldvalidators(control: AbstractControl) : ValidationErrors | null {

    const passwordVal = control.get('UsersPassword');

    const confirmPasswordVal = control.get('ConfirmPassword');


   if(passwordVal && confirmPasswordVal && passwordVal.value!==confirmPasswordVal.value){
    return {notmatching: true};
   }

    return null;

}