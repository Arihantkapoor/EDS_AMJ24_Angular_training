import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { customValidation } from './Validator/custom.validator';
import { ValidatorService } from './Service/validator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private validatorService: ValidatorService){}

  userform: FormGroup;


  ngOnInit(): void {
    this.userform =  this.fb.group({
      userInput:['',customValidation(this.validatorService,10)]
    });
  }




}
