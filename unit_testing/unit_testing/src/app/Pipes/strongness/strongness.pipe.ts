import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongness'
})
export class StrongnessPipe implements PipeTransform {

  transform(value: number):string {
    if(value<10){
      return value + " weak";
    }
    else if(value>=10 && value<20){
      return value + " strong";
    }
    else{
      return value + " strongest";
    }
  }

}
