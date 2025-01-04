
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder , Validators, FormArray} from '@angular/forms';
import {gte} from '../Shared/gte.validator';
import { customAdmin } from '../Shared/customAdmin.validator';
import { gteParam } from '../Shared/gteParam.validator';
import { checkName } from '../Shared/asyncUserName.validator';
@Component({
  selector: 'app-RegisterReactive',
  templateUrl: './RegisterReactive.component.html',
  styleUrls: ['./RegisterReactive.component.css'],
  providers:[FormBuilder]
})
export class RegisterReactiveComponent implements OnInit {
 
  constructor(private fb:FormBuilder){
 
  }

  RegistrationForm: FormGroup;
  
  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      // UserName:['', [Validators.required,Validators.minLength(3),
      //   Validators.min(20),gte,customAdmin,gteParam(34)]],
      UserName:['',Validators.required,checkName],
      Email:[''],
      Subscribe:[false],
      Password:['Admin'],
      ConfirmPassword:['Admin'],
      AlternateEmail: this.fb.array([]),
      Address:this.fb.group({
        City:['Noida'],
        State:['UP'],
        Country:['India']
      })
    })

    this.RegistrationForm.get('Subscribe')?.valueChanges.subscribe( checkValue=>{
      const email = this.RegistrationForm.get('Email');

      if(checkValue){
        email?.setValidators(Validators.required);
      }
      else{
        email?.clearValidators();
      }

      email?.updateValueAndValidity();
    })
  }
  
  // this.RegistrationForm=this.fb.group({
  //   UserName:['', [Validators.required,Validators.minLength(3),
  //     Validators.min(20),gte,customAdmin,gteParam(34)]],
  //   Email:[''],
  //   Subscribe:[false],
  //   Password:['Admin'],
  //   ConfirmPassword:['Admin'],
  //   Address:this.fb.group({
  //     City:['Noida'],
  //     State:['UP'],
  //     Country:['India']
  //   })
  // })
 
  // RegistrationForm=new FormGroup(
  //   {
  //     UserName:new FormControl("Aditi"),
  //     Password:new FormControl(''),
  //     ConfirmPassword:new FormControl(''),
  //     Address:new FormGroup({
  //       City:new FormControl(''),
  //       State:new FormControl(''),
  //       Country:new FormControl('')
  //     })
  //   }
  // )
 
 
 
  LoadApiData(){
    this.RegistrationForm.patchValue({
        "UserName":"Devin",
        "Password":"Admin",
        "ConfirmPassword":"Admin",
       
      })
  }
 
  //this.RegistrationForm.setValue({
    //   "UserName":"John",
    //   "Password":"Admin",
    //   "ConfirmPassword":"Admin",
    //   Address:{
    //     "City":"Noida",
    //     "State":"UP",
    //     "Country":"India"
    //   }
    // })
  
    get UserName(){
      return this.RegistrationForm.get('UserName');
    }
    get Email(){
      return this.RegistrationForm.get('Email');
    }

    get AltEmail(){
      return this.RegistrationForm.get('AlternateEmail') as FormArray;
    }

    addAlternateEmail(){
      return this.AltEmail?.push(this.fb.control(''));
    }
}
 