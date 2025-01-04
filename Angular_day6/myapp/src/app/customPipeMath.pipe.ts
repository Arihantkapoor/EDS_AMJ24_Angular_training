import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeMath'
})
export class CustomPipeMathPipe implements PipeTransform {

  transform(value: number, args=1): number {
    return Math.pow(value,args);
  }

}
