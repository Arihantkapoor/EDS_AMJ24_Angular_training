import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMycustomeDirective]'
})
export class MycustomeDirectiveDirective {
  @Input() appMycustomeDirective = '';
  constructor(private ef: ElementRef) {

      // ef.nativeElement.style.backgroundColor = 'yellow';
      // ef.nativeElement.style.color = 'red';

   }

   @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appMycustomeDirective || 'red');
   }
   private highlight(color:string){
    this.ef.nativeElement.style.backgroundColor = color;
   }
  //  @HostListener('mouseleave') onMouseLeave(){
  //   this.highlight('');
  //  }
   

}
