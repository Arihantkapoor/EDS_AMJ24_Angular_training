export class UserModel{
    id:number;
    name:string;
    username: string;
    // email:string;


    constructor(id:number,name:string, uname: string){
        this.id = id;
        this.name = name;
        this.username = uname;
        // this.email = email;
    }
}