import { Component } from '@angular/core';
import { CardsComponent } from '../../features/slides';
import { CursorDirective } from '../../shared/directives/cursor.directive';
import { BigCardComponent } from '../../features/slides/big-card/big-card.component';
import { IntroCardComponent } from "../../features/slides/intro-card/intro-card.component";
import { AboutCardComponent } from '../../features/slides/about-card/about-card.component';

@Component({
    selector: 'gt-slides-page',
    standalone: true,
    templateUrl: './slides-page.component.html',
    styleUrl: './slides-page.component.scss',
    imports: [
        CardsComponent,
        CursorDirective,
        BigCardComponent,
        IntroCardComponent,
        AboutCardComponent
    ]
})
export class SlidesPageComponent {

}
