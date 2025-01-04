import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmployeeDir]'
})
export class EmployeeDirDirective {

  constructor(private ef: ElementRef) {
    ef.nativeElement.style.backgroundColor = 'blue';
   }

}
