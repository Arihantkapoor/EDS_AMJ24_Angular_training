import { Injectable } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";
import { of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LoginService{

    userdata:User[];
    isLogged:boolean = false;
    constructor(private serv:UserService){}

    login(name:string){
        this.serv.getAllUsers().subscribe(
            data=>{
                this.userdata = data;
                let user = this.userdata.find(x=>x.name==name);

                if(user===undefined){
                    this.isLogged = false;
                }
                else{
                    this.isLogged = true;
                }
            }
        )
        return this.isLogged;
    }
  
}