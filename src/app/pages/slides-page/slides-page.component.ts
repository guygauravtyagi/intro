import { Component } from '@angular/core';
import { CardsComponent } from '../../features/slides';
import { CursorDirective } from '../../shared/directives/cursor.directive';
import { BigCardComponent } from '../../features/slides/big-card/big-card.component';

@Component({
  selector: 'gt-slides-page',
  standalone: true,
  imports: [
    CardsComponent,
    CursorDirective,
    BigCardComponent
  ],
  templateUrl: './slides-page.component.html',
  styleUrl: './slides-page.component.scss'
})
export class SlidesPageComponent {

}
