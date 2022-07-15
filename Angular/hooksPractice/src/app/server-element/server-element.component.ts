import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') Paragraph: ElementRef;
  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChnages called");
    console.log(changes);
  }

  ngOnInit(): void {

    console.log("ng Onit Called")
    // console.log('this is Text :' +  this.header.nativeElement.textContent);
    // console.log(` this is ${this.Paragraph.nativeElement.textContent}`);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called')
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(` this is ${this.Paragraph.nativeElement.textContent}`);
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
    // console.log(` this is ${this.Paragraph.nativeElement.textContent}`);


  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log('this is Text :' + this.header.nativeElement.textContent);
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy Called")
  }
}
