import { Directive, ElementRef,Renderer2,HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputButtomBordered]'
})
export class InputButtomBorderedDirective {
  constructor(private eleRef : ElementRef, private renderer :Renderer2 ) { }


  @HostListener('focus') onFocus() {
      this.renderer.setStyle(this.eleRef.nativeElement,"border-bottom"," 3px solid #74d2e7");
      this.renderer.setStyle(this.eleRef.nativeElement,"transition","all 0.5s ease-in-out");
      this.renderer.setStyle(this.eleRef.nativeElement,"box-sizing","border-box");
      
  }
  @HostListener('blur') onBlur() {
      this.renderer.setStyle(this.eleRef.nativeElement,"border-bottom"," 1px solid #495057");
      this.renderer.setStyle(this.eleRef.nativeElement,"transition","all 0.5s ease-in-out");
      
  }
}
