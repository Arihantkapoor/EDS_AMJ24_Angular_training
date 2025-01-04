import { Component, OnInit } from '@angular/core';
import { DropDownService } from '../Services/DropDown.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
  providers:[DropDownService]
})
export class NewcompComponent implements OnInit {

  constructor(private srv: DropDownService) { }

  state:any = [];
  cities:any = [];
  ngOnInit():void {
   this.state =  this.srv.states();
  }

  fun(data:any){
    // console.log(data.target.value);
   this.cities =   this.srv.cities().filter(x=>x.id==data.target.value);
  }

}
