import { Component, OnInit } from '@angular/core';
import { subscribeService } from '../Services/subscription.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers:[subscribeService]
})
export class HeaderComponent implements OnInit {

  constructor(private obj: subscribeService) { }

  ngOnInit() {
  }

  onSubscribe(){
  //  const obj = new subscribeService();
   this.obj.getalert('Yearly');
  }

}
