import { Component, OnInit} from '@angular/core';
import {subscribeService} from '../../Services/subscription.services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[subscribeService]
})
export class HomeComponent implements OnInit {
  constructor(private obj: subscribeService ) { }

  ngOnInit() {
  }

  onSubscribe(){
  //  const obj = new subscribeService();
   this.obj.getalert('Quarterly');
  }

}
