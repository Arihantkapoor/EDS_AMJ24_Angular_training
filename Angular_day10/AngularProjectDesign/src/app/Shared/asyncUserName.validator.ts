import { AbstractControl } from "@angular/forms";

function UserNameAllowed(userName:string){
    const userNameArray = ["arihant14","Arihant14","arihant_14","Arihant_14","Admin","admin"];

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(userNameArray.includes(userName)){
                resolve({checkName:true});
            }
            else{
                resolve(null);
            }
        }, 2000);
    })
}

export function checkName(control: AbstractControl):Promise<any>{
    return UserNameAllowed(control.value);
}