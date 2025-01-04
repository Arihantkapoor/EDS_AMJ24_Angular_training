import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitlePipe'
})
export class TitlePipePipe implements PipeTransform {

  transform(value: string, args:string): string {
    if(args.toLowerCase()=='male')
      return "Mr." + value;
    return "Ms." + value;
  }

  
}
