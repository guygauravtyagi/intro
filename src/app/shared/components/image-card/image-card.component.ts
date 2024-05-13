import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrolledToViewDirective } from '../../directives/scrolled-to-view.directive';

@Component({
  selector: 'gt-image-card',
  standalone: true,
  imports: [CommonModule, ScrolledToViewDirective],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {

  @ViewChild('leftSide') leftSide!: ElementRef;
  @ViewChild('rightSide') rightSide!: ElementRef;

  doSomething() {
    this.leftSide.nativeElement.classList.add('slideLeft');
    this.rightSide.nativeElement.classList.add('slideRight');
  }

}
