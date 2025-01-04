import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ValidatorService{

    validationLogic(num:number, value:number){
        if(num<=value)
            return true;
        return false;
    }
}