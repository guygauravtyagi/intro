import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: 'gtCursor',

  standalone: true
})
export class CursorDirective {
  private child = this.document.createElement('div');

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const interacting = !!(event.target as any)?.closest('.interactable');
    const elementName = (event.target as any)?.closest('.interactable')?.dataset.name;
    const elementColor = (event.target as any)?.closest('.interactable')?.dataset.color;
    this.child.innerHTML = `<p>${elementName}</p>`;
    if(elementColor) this.child.style.backgroundColor = elementColor;
    this.child.animate({
      transform: `translate(${event.clientX - this.child.offsetHeight / 2}px, ${event.clientY - this.child.offsetWidth / 2}px) scale(${interacting ? 4 : 1})`
    }, {
      duration: 400,
      fill: 'forwards'
    })
  }
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.child.classList.add('move');
    this.renderer.appendChild(this.elementRef.nativeElement, this.child);
    /**
     * For some reason rendrer was rendering element twice
     */
    if (this.document.getElementsByClassName('move')[1])
      this.child.parentNode?.removeChild(this.document.getElementsByClassName('move')[0]);
  }
}
