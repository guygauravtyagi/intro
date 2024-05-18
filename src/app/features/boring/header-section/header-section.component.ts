import { Component, Input, OnInit } from '@angular/core';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gt-header-section',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent implements OnInit {

  @Input() profilePic: string | undefined;
  bgProfilePic: string | undefined;
  @Input() heading: string | undefined;
  @Input() subHeading: string | undefined;

  ngOnInit(): void {      
    this.bgProfilePic = `url(${this.profilePic})`;
  }

}
