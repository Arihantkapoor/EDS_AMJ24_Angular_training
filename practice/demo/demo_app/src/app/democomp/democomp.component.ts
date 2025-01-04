import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkNameValidation } from '../AsyncNumber.validator';

@Component({
  selector: 'app-democomp',
  templateUrl: './democomp.component.html',
  styleUrls: ['./democomp.component.css']
})
export class DemocompComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.userform = this.fb.group(
      {
        numberInput:['',Validators.required,checkNameValidation]
      }
    )
  }


}
