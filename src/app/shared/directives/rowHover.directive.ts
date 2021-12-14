import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
     selector: '[rowHover]' 
})
export class RowHoverDirective {
    constructor(private elRef: ElementRef) {
    }

    @HostListener('mouseover') onmouseover() {
        this.changeBackgroundColor('#d0e1fd');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.changeBackgroundColor('#FFFFFF');
      }

    private changeBackgroundColor(color: string) {
        this.elRef.nativeElement.style.backgroundColor = color;
      }
}
