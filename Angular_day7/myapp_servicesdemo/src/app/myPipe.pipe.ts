import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args:number[]): string {
    return value.substring(args[0],args[1]);
  }

}

export class MyPipePipe1 implements PipeTransform {

  transform(value: string, ...args:number[]): string {
    return value.charAt(args[0]);
  }

}
