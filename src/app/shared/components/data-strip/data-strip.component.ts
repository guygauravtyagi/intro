import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gt-data-pin',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <a class="data-pins" [attr.href]="link" >
        <fa-icon [icon]="icon"></fa-icon>
        <label>{{name}}</label>
    </a>
  `,
  styleUrl: './data-strip.component.scss'
})
export class DataPinComponent {
  @Input() icon: IconDefinition = faLocationPin;
  @Input() name: string = '';
  @Input() link: string = '';
}


@Component({
  selector: 'gt-data-strip',
  standalone: true,
  imports: [FontAwesomeModule, DataPinComponent],
  templateUrl: './data-strip.component.html',
  styleUrl: './data-strip.component.scss'
})
export class DataStripComponent {
  faLocationPin = faLocationPin;
  faSquareXTwitter = faSquareXTwitter;
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
}


