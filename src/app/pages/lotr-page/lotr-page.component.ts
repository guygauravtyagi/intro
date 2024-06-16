import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gt-lotr-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './lotr-page.component.html',
  styleUrl: './lotr-page.component.scss'
})
export class LotrPageComponent {

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    event.target.style.setProperty('--x', -event.offsetX + "px");
    event.target.style.setProperty('--y', -event.offsetY + "px");
  }

  @HostListener('document:mousedown', ['$event']) onMouseDown(event: any) {
    event.target.style.setProperty('--invert', "100%");
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(event: any) {
    event.target.style.setProperty('--invert', "0%");
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.document.body.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('overflow-hidden');
  }

}
