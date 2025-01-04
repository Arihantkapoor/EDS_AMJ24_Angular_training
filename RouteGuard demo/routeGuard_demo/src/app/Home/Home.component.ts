import { Component, OnInit } from '@angular/core';
import { IDeactivated } from '../authguard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,IDeactivated {

  constructor() { }
  canExit () {
    return true;
  }

  ngOnInit() {
  }

}
