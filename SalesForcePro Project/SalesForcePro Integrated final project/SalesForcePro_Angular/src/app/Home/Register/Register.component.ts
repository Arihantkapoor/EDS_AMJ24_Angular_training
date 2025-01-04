import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { crossFieldvalidators } from 'src/app/Service/Crossfield.validator';
import { UserCredentialService } from 'src/app/Service/UserCredential.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private usrServ:UserCredentialService, private router: Router) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      UsersName:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      UsersPassword: ['',[Validators.required,Validators.minLength(8)]],
        ConfirmPassword:['',[Validators.required]]
      },{validators:crossFieldvalidators});
  }
  submitForm(form: any) {
    if(this.userForm.valid){
      this.usrServ.Register(this.userForm.value).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/Home/Login']);
        }
      );
      this.userForm.reset();
    }
  }

  get UserName(){
    return this.userForm.get('UsersName');
  }
  get Email(){
    return this.userForm.get('Email');
  }
  get Mobile(){
    return this.userForm.get('Mobile');
  }
  get Password(){
    return this.userForm.get('UsersPassword');
  }
  get ConfirmPassword(){
    return this.userForm.get('ConfirmPassword');
  }
}
