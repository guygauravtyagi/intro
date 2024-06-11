import { Component } from '@angular/core';
import { CardsComponent } from '../../features/slides';
import { CursorDirective } from '../../shared/directives/cursor.directive';

@Component({
  selector: 'gt-slides-page',
  standalone: true,
  imports: [
    CardsComponent,
    CursorDirective
  ],
  templateUrl: './slides-page.component.html',
  styleUrl: './slides-page.component.scss'
})
export class SlidesPageComponent {

}
