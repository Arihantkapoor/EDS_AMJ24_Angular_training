import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
   }

   ngOnInit(): void {
     this.elementRef.nativeElement.style.backgroundColor = 'blue';
   }
  


}
