import { Injectable } from "@angular/core";
import { User } from "../Models/user";
import { LoggerService } from "./logger.service";

// @Injectable({
//     providedIn:"root"
// })

@Injectable()
export class userService{

    constructor(private loggerService: LoggerService){

    }

    UserArray:User[] = [
        new User('Arihant','Male','Monthly','Active'),
        new User('Aditi','Female','Yearly','Active'),
        new User('Kishan','Male','Quaterly','Inactive'),
        new User('Aastik','Male','Yearly','Inactive'),
    ]

    getAllUsers(){
        return this.UserArray;
    }

    createUser(name:string, gender:string, substype:string, status:string){
      let obj =  new User(name,gender,substype,status);
      this.UserArray.push(obj);
      this.loggerService.logMessage(name,status);
    }
}