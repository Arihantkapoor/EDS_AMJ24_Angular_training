import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})

export class LoggerService{

    logMessage(name:string, status:string){
        console.log(`New User wiht name ${name} with status ${status} is added`);
    }
}