import { Component, ViewChild } from '@angular/core';
import { Childcomp3Component} from '../childcomp3/childcomp3.component';
@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent {

  data = '';

  // userdata(item:string){

  //   this.data = item;

  // }

  userdata(item:string){
    this.data = item;
  }


  @ViewChild(Childcomp3Component) obj1?: Childcomp3Component;


}
