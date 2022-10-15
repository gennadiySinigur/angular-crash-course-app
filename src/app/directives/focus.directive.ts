import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {
    // this.element.nativeElement.focus()
  }

  ngOnInit() {
    this.element.nativeElement.focus()
  }
}
