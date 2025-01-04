export class LoginModel{
    email:string;
    password:string;  
    
    constructor(em:string, pwd:string){
        this.email = em;
        this.password = pwd;
    }
}