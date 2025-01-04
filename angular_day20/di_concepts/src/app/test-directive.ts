import { Directive, ElementRef, Host, OnInit } from "@angular/core";
import { RandomService } from "./Services/randomService.service";

@Directive({
    selector: '[testDirective]',
    // providers:[RandomService]
    
})
export class testDirective implements OnInit {

    constructor( private randomNum: RandomService, private ef: ElementRef) {

    }

    ngOnInit(): void {
        this.ef.nativeElement.innerHTML = "Directive => " + this.randomNum.num;
    }

}