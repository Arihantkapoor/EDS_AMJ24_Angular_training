import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {
    alert('Logger Service');
  }

  messages: string[] = [];

  log(message: string) {
    alert('Log Function called');
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
