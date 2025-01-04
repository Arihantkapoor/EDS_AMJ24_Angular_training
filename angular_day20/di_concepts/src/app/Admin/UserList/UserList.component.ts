import { Component, Inject, OnInit } from '@angular/core';
import { user_token } from 'src/app/app.module';
import { User } from 'src/app/Models/user';
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-UserList',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.css'],
  // providers:[userService]
})
export class UserListComponent implements OnInit {

  constructor(@Inject(user_token) private userServ: userService) { }

  userList = this.userServ.getAllUsers();
  ngOnInit() {
  }

}
