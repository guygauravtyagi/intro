import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gt-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  @Input() name: string | undefined;
  @Input() icon: string | undefined;
  @Input() height: string = '30px';
  @Input() width: string = '100px';

}
