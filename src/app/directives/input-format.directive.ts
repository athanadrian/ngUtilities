import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') appInputFormat;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onblur() {
    const value: string = this.el.nativeElement.value;

    if (this.appInputFormat === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
