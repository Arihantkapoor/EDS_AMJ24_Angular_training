import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../Model/Login";

@Injectable({
    providedIn: "root"
})

export class UserCredentialService{

    constructor(private http: HttpClient){}

    Register(form:any){
      return this.http.post('http://localhost:5144/api/LoginRegister/Register',form);
    }

    Login(obj: LoginModel){
      return this.http.post("http://localhost:5144/api/LoginRegister/Login",obj);
    }

}