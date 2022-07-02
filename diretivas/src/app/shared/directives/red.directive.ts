import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(elementRef: ElementRef) { 
    elementRef.nativeElement.style.color = 'red'
  }

}
