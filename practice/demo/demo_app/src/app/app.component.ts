import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { checkpassword } from './pwd.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  userform: FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.userform = this.fb.group({
      password:[''],
      confirmpassword: ['']
    },{validators:checkpassword('password','confirmpassword')});
  }


  // passwordValidator(control:AbstractControl):ValidationErrors|null{
  //   return control.get('password')?.value===control.get('confirmpassword')?.value?null:{mismatched:true};
  // }





}
