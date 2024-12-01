import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[autoHeight]',
  standalone: true
})
export class AutoHeightDirective implements AfterViewInit, OnDestroy {
  nativeElement: HTMLTextAreaElement;
  renderedFontSize = 14;
  private listener!: () => void;

  constructor(el: ElementRef, private readonly renderer: Renderer2) {
    this.nativeElement = el.nativeElement;
  }

  ngAfterViewInit(): void {
    this.listener = this.renderer.listen(this.nativeElement, 'keyup', (event: MouseEvent) => {
      const textAreaComputedStyles: CSSStyleDeclaration = window.getComputedStyle(this.nativeElement);
      this.renderedFontSize = Number.parseInt(textAreaComputedStyles.fontSize);
      // console.log(this.nativeElement.getBoundingClientRect().height);
      this.renderedFontSize += this.renderedFontSize % 2 === 0 ? 0 : 1; //round to even
      const heightInPixels: string = this.calcHeight(this.nativeElement.value) + "px";
      this.renderer.setStyle(this.nativeElement, 'height', heightInPixels);
    });
  }

  calcHeight(value: string) {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    // let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2; 
    const newHeight = this.renderedFontSize + numberOfLineBreaks * this.renderedFontSize + 12 + 2;
    return newHeight;
  }

  ngOnDestroy() {
    this.listener();
  }
}
