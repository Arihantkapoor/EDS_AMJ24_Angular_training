import { ElementRef } from "@angular/core"
import { MyDirectiveDirective } from "./my-directive.directive";

describe('Custom directive Testing', ()=>{

  let elementRef: ElementRef;
  let directive: MyDirectiveDirective;

  beforeEach(()=>{
    elementRef = new ElementRef(document.createElement('div'));
    directive = new MyDirectiveDirective(elementRef);

  });

  it('should create an instance', ()=>{
    expect(directive).toBeTruthy();
  });

  it('should change background color', ()=>{
    directive.ngOnInit();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('blue');
  })

})