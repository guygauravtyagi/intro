import { Component, Input } from '@angular/core';

@Component({
  selector: 'gt-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() name = '';
  @Input() backgroundImage?: string;
}
