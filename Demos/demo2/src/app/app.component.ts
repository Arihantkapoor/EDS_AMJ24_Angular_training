import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { customNumValidation } from './customNum.validator';
// import { ValidationService } from './Validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  userform: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.userform = this.fb.group({
      userInput:['',customNumValidation(10)]
    });
  }

}
