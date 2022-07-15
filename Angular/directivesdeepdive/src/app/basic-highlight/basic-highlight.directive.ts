import { Directive, ElementRef } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})
export class BasicHighlight implements OnInit{
   
    constructor(private elementRef : ElementRef) {

    }

    ngOnInit(){
     this.elementRef.nativeElement.style.backgroundColor = "green";
    }
}