import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gt-big-card',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() name = '';
  @Input() backgroundImage?: string;
  @Input() href = '';
}
