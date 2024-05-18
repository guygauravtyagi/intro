import { AfterViewInit, Component, ElementRef, Inject, OnDestroy } from '@angular/core';
import { MajorSectionComponent, TableSectionComponent } from '../../features/boring';
import { CardData, TagDetails } from '../../shared/interfaces/boring-model';
import { DOCUMENT } from '@angular/common';
import { HeaderSectionComponent } from '../../features/boring/header-section/header-section.component';
import { AboutSectionComponent } from '../../features/boring/about-section/about-section.component';
import { DataStripComponent } from '../../shared/components/data-strip/data-strip.component';

@Component({
  selector: 'gt-boring-page',
  standalone: true,
  imports: [HeaderSectionComponent, DataStripComponent, AboutSectionComponent, MajorSectionComponent, TableSectionComponent],
  templateUrl: './boring-page.component.html',
  styleUrl: './boring-page.component.scss'
})
export class BoringPageComponent implements AfterViewInit, OnDestroy {

  cardData: CardData[] = [{
    heading: 'Altair',
    subHeading: 'March 2014 - March 2016',
    body: {
      heading: 'Software Developer',
      subHeading: 'RVS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. At tellus at urna condimentum mattis pellentesque. Commodo sed egestas egestas fringilla phasellus. Iaculis at erat pellentesque adipiscing commodo. Tincidunt praesent semper feugiat nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. In iaculis nunc sed augue lacus viverra vitae congue. Lacinia quis vel eros donec ac odio tempor. Ut pharetra sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas maecenas. Vitae suscipit tellus mauris a diam maecenas sed enim. Sed augue lacus viverra vitae congue eu.'
    }
  }, {
    heading: 'Century Link',
    subHeading: 'March 2016 - March 2018',
    body: {
      heading: 'Software Developer'
    }
  }
  ]

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.document.body.classList.add('font-family-g');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('font-family-g');
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'white';
  }
}
