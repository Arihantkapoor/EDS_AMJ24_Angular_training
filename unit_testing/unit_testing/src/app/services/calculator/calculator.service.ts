import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private serv: LoggerService) {}

  add(n1: number, n2: number) {
    let result = n1 + n2;
    this.serv.log('Add operation called');
    return result;
  }

  subtract(n1: number, n2: number) {
    let result = n1 - n2;
    this.serv.log('Subtract operation called');
    return result;
  }
}
