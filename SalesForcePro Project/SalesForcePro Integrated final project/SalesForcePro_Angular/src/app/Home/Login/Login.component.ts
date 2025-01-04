import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentialService } from 'src/app/Service/UserCredential.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/Service/Global.service';
import { LoginModel } from 'src/app/Model/Login';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private usrServ: UserCredentialService, private router: Router, private global: GlobalService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Email: ['',[Validators.required,Validators.email]],
      UsersPassword:['',[Validators.required]]
    });

  }

  get Email(){
    return this.userForm.get('Email');
  }
  get Password(){
    return this.userForm.get('UsersPassword');
  }

  submitForm(form: any) {
    if(this.userForm.valid){
      const loginModel = new LoginModel(form.value.Email,form.value.UsersPassword);
      this.usrServ.Login(loginModel).subscribe(
        (data:any)=>{
          console.log(data);
          if(data.email!=null){
            this.global.loggedin = true;
            this.router.navigate(['/Dashboard'])
          }
          else{
            alert('Email/Password not correct');
          }
        }
      );
      this.userForm.reset();
    }
  }


  

}
