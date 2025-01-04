import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../CrossFieldValidator';

@Component({
  selector: 'app-crossfieldValidation',
  templateUrl: './crossfieldValidation.component.html',
  styleUrls: ['./crossfieldValidation.component.css']
})
export class CrossfieldValidationComponent implements OnInit {

  userform: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      password:[''],
      confirmpassword:['']
    },{validators:matchPassword})
  }

}
