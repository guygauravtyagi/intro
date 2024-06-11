import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: 'gtCursor',

  standalone: true
})
export class CursorDirective {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log(event.clientX, event.clientY);
  }
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const child = this.document.createElement('div');
    child.classList.add('move');
    this.renderer.appendChild(this.elementRef.nativeElement, child);
  }
}
