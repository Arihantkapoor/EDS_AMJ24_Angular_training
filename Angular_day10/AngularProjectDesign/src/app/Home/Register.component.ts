import { Component, OnInit } from "@angular/core";
import { User } from "../Models/User";
import { NgForm } from "@angular/forms";
import { UserService } from "../Services/User.service";

@Component({
    selector: 'app-Register',
    templateUrl: './register.component.html',
    providers:[UserService]
})
export class RegisterComponent implements OnInit{

    constructor(private userService: UserService){

    }

    UserModel:any;
    ngOnInit(): void {
        this.UserModel = this.userService.getdate();
        console.log(this.UserModel);
    }
    courseError = true;

    courses:string[] = ["C#","React","JavaScript","Angular","NodeJs"];

    // UserModel = new User("","arihant.kapoor@hcltech.com",8869086529,"default");
    validate(data:any){
        if(data=="default"){
            this.courseError = true;
        }
        else{
            this.courseError = false;
        }
    }

    onSubmit(form: NgForm){
        // console.log(this.UserModel);
        console.log(form.value);
    }
}