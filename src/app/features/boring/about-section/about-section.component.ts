import { Component } from '@angular/core';
import { PostCardComponent } from '../../../shared/components/post-card/post-card.component';
import { TagsComponent } from '../../../shared/components/tags/tags.component';

@Component({
  selector: 'gt-about-section',
  standalone: true,
  imports: [PostCardComponent, TagsComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

}
