import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlight implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() hoverColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string = '';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }



    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
        this.backgroundColor = this.defaultColor;
    }


    @HostListener('mouseenter') mouseover(elementData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
        this.backgroundColor = this.hoverColor;
    }

    @HostListener('mouseleave') mouseleave(elementData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}