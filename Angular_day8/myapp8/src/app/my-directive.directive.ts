import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'

})
export class MyDirectiveDirective {

  constructor(private ef: ElementRef, private render: Renderer2) {
    // ef.nativeElement.style.backgroundColor = 'Aqua';
    // ef.nativeElement.title = 'This is it';

    // render.setStyle(ef.nativeElement,"backgroundColor","aqua");
    // render.setStyle(ef.nativeElement,'color','white');

    // render.setAttribute(ef.nativeElement,'title','Paragraph element');


   }

   @HostBinding('style.background') bgColor:string = 'green' //Property binding
   @HostListener('mouseenter') onMouseEnter(){ //Event binding
    this.bgColor = 'blue';
   }

   @HostListener('mouseout') onMouseOut(){
    this.bgColor = 'pink';
   }
}
