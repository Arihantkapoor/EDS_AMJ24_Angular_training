export class Employee{
    emp_id?:number;
    emp_name?:string;
    emp_email?:string;
    password?:string;
    confirmPassword?:string;

    constructor(id:number,name:string,email:string,pwd:string,cnfpwd:string){
        this.emp_id = id;
        this.emp_name = name;
        this.emp_email = email;
        this.password = pwd;
        this.confirmPassword = cnfpwd;
    }
}