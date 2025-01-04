import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { IDeactivated } from '../authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,IDeactivated {

  name='';
  constructor(private serv:LoginService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  OnFormSubmit(form:NgForm){
    this.isSubmitted=true;
    this.serv.login(form.value.name).subscribe(
      data=>{
        if(data){
          this.router.navigate(['product']);
        }
        else{
          this.router.navigate(['home']);
    
        }
      }
    )
    

  }
  isSubmitted:boolean=false;
  canExit(){
    if(this.name && !this.isSubmitted){
      return confirm("are you really want to navigate");
    }
    else{
      return true;
    }
  }

}
