import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[disableControl]',
})
export class DisableControlDirective {
  @Input() set disableControl(condition: boolean) {
    this.elementRef.nativeElement.disabled = condition;
  }

  constructor(private elementRef: ElementRef) {}
}
