import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../Services/validator.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-democomp',
  templateUrl: './democomp.component.html',
  styleUrls: ['./democomp.component.css'],
  providers:[ValidatorService]
})
export class DemocompComponent implements OnInit {

  constructor(private serv: ValidatorService,private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      num:['',this.serv.validateNum]
    });
  }

  userform: FormGroup;

  get Num(){
    return this.userform.get('num');
  }


}
