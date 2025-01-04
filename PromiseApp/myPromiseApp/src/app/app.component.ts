import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const obj = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve('Chocolate');
        resolve('IceCream');
      }, 1000);
    });

    obj.then((result) => {
      console.log(result);
    });

    const obj1 = new Observable((data) => {
      setTimeout(() => {
        data.next('Chocolate1');
        data.next('Ice Cream');
      }, 1000);
    });

    obj1.subscribe((result) => {
      console.log(result);
    });
  }
}
