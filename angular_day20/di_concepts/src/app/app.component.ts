import { Component, OnInit } from '@angular/core';
import { UserModelService } from './Services/userModel.service';
import { UserModel } from './Models/userModel';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private srv: UserModelService){}

  

  userList:UserModel[] = [];
  errorMsg:string;
  ngOnInit(): void {
    this.srv.getUser().subscribe(data=>{
      this.userList = data;
      console.log(data);
    },(err)=>{
      this.errorMsg = err;
    })
  }
  
  user = new UserModel(0,'Arihant','arihant_14');

  onSubmit(){
    console.log(this.user);
      this.srv.PostUser(this.user).subscribe(data=>{
        console.log(data);

        // this.userList.push(data);
      })
  }
  
}
