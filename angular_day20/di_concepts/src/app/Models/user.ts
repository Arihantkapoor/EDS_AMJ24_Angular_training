export class User{
    name:string;
    gender:string;
    subscriptionType:string;
    status: string;

    constructor(name:string,gender:string,substype:string, status:string){
        this.name = name;
        this.gender = gender;
        this.subscriptionType = substype;
        this.status = status;
    }
}