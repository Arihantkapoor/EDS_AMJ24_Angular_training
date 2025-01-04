import { AbstractControl, ValidationErrors } from "@angular/forms";

function returnNumPromise(data:number){

    return new Promise((resolve,reject)=>{
        if(data<=10){
            resolve({chknum:true});
        }
        else{
            resolve(null);
        }
    })
}

export function checkNameValidation(control:AbstractControl):ValidationErrors|null{

    return returnNumPromise(control.value);
}