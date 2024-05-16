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
    height: '60vh'
  };
  @Input() image: string = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  bgImage = `url(${this.image})`;
  
}
