import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private e: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: string = this.e.nativeElement.value;
    if (this.format == 'lowercase') {
      this.e.nativeElement.value = value.toLowerCase();
    } else {
      this.e.nativeElement.value = value.toUpperCase();
    }
  }
}
