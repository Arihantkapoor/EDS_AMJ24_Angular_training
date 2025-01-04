import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../Login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('name') name:ElementRef;

  constructor(private loginserv:LoginService){}

  ngOnInit(): void {
    
  }

  onLoginClicked(){
    const uname = this.name.nativeElement.value;
    // const user = this.loginserv.login(uname);
    if(this.loginserv.login(uname)){
      alert("Login failed");
    }
    else{
      alert("Welcome " + uname + " you are logged in");
    }
  }

}
