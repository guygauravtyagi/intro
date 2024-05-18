import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Styles } from '../../interfaces/boring-model';

@Component({
  selector: 'gt-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {

  @Input() style: Styles = {
    height: '50vh'
  };
  @Input() image: string = 'assets/images/boring-bg.jpg';
  bgImage = `url(${this.image})`;
  
}
