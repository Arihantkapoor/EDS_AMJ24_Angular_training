import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  isView?:boolean = false;
  constructor(private templateref: TemplateRef<any>, private vwcontainerref: ViewContainerRef) { 

  }

  @Input() set appMyDirective(condition:boolean){

    if(condition && !this.isView){
      this.vwcontainerref.createEmbeddedView(this.templateref);
      this.isView = true;
    }
    else if(!condition && this.isView){
      this.vwcontainerref.clear(); 
      this.isView = false;
    }

  }

}
