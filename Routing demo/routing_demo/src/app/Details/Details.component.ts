import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  serv:UserService = inject(UserService);

  id?:string|null;

  userArray?:User[];

  selectedUser?:User;

  ngOnInit() {

    // this.id =   this.activatedRoute.snapshot.params['id'];

    // this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // this.activatedRoute.params.subscribe(data=>{
    //   this.id = data['id'];
    // })

    this.activatedRoute.paramMap.subscribe(data=>{
      this.id = data.get('id');
    })

    this.serv.getAllUsers().subscribe(data=>
      {
        this.userArray = data;
        this.selectedUser = this.userArray.find(x=>x.id == this.id);
      }
    );


  }


}
