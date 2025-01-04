import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from '../Services/user.service';
import { userValidatorService } from '../Services/userValidator.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  providers:[userValidatorService]
})
export class ServiceDemoComponent implements OnInit{

  constructor(private fb: FormBuilder, private usrServ: userValidatorService){

  }

  userform: FormGroup;

  ngOnInit(): void {
    this.userform = this.fb.group({
      userInput:['',this.usrServ.customValidation]
    });
  }
  
  get Num(){
    return this.userform.get('userInput');
  }
}
