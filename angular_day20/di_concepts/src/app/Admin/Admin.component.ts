import { Component, inject, Inject, OnInit } from '@angular/core';
import { userService } from '../Services/user.service';
import { user_token } from '../app.module';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css'],
  // providers:[userService]
})
export class AdminComponent implements OnInit {

  constructor(@Inject(user_token) private serv: userService) { }

  // serv = inject(userService) 
  ngOnInit() {
  }

  Name = "";
  Gender = "male";
  SubsType = "Monthly";
  status = "Active";

  createNewUser(){
    this.serv.createUser(this.Name,this.Gender,this.SubsType,this.status);
    console.log(this.serv.UserArray);
  }

}
