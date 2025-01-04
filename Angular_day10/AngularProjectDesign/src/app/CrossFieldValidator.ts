import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPassword(control:AbstractControl):ValidationErrors|null{
   const pwd = control.get('password')?.value;
   const cpwd = control.get('confirmpassword')?.value;
   
   if(pwd!=cpwd){
    return {notmatching:true};
   }
   return null;
   
}