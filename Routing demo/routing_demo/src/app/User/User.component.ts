import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  searchString: string;

  constructor(private serv: UserService) { }

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  userList: User[] = [];

  searchedUser: User[];

  ngOnInit() {
    this.serv.getAllUsers().subscribe(data => this.userList = data);

    this.searchString = this.activatedRoute.snapshot.queryParams['search'];
    console.log(this.searchString);


    if (this.searchString === undefined || this.searchString === '') {
      this.serv.getAllUsers().subscribe(data => this.userList = data);
    }

    else {
      alert("In else block");
        this.serv.getAllUsers().subscribe(data => {
        this.userList = data
        this.searchedUser = this.userList.filter(x => x.name?.toLowerCase() == this.searchString.toLowerCase());
        console.log(this.searchedUser);

        this.userList = this.searchedUser;


      });


    }

    



  }



}
