import { Component, Input } from '@angular/core';
import { ImageCardComponent } from '../../../shared/components';
import { CardData } from '../../../shared/interfaces/boring-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gt-major-section',
  standalone: true,
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './major-section.component.html',
  styleUrl: './major-section.component.scss'
})
export class MajorSectionComponent {
  @Input() sectionTitle: string | undefined;
  @Input() cardData: CardData[] = [];
}
