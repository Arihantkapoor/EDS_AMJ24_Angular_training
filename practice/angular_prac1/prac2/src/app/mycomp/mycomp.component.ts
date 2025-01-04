import { Component, ViewChild } from '@angular/core';
import { ChildcompComponent } from '../childcomp/childcomp.component';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent {

  txtvalue = '';

  txtvalue1 = '';

  data_received = '';
  fun(data:any){
    console.log(data);
    this.txtvalue1 = data;
  }

  receiveData(data:any){
    this.data_received = data;
  }

  @ViewChild(ChildcompComponent) child_comp_obj?: ChildcompComponent;
}
