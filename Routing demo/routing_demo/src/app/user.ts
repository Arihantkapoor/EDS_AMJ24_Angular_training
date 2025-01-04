export class User{
    id?:string;
    name?:string;
    email?:string;
 
 
    constructor(id:string,name:string,email:string){
        this.name=name;
        this.id=id;
        this.email=email;
 
    }
}