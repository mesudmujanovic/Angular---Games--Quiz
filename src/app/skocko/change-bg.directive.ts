import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect: any;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener("click") answer() {
    if (this.isCorrect = 1) {
      this.render.setStyle(this.el.nativeElement, 'background', 'yellow')
    } if (this.isCorrect = 2) {
      this.render.setStyle(this.el.nativeElement, 'background', 'red')
    } else {
      this.render.setStyle(this.el.nativeElement, 'background', 'black')
    }
  }

}
