import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ValidationService{

    getValidationLogin(num:number, customNum: number) : boolean{
        if(num<=customNum){
            return true;
        }
        return false;
    }
}