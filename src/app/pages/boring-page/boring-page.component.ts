import { AfterViewInit, Component, ElementRef, Inject, OnDestroy } from '@angular/core';
import { MajorSectionComponent, TableSectionComponent } from '../../features/boring';
import { CardData, TagDetails } from '../../shared/interfaces/boring-model';
import { DOCUMENT } from '@angular/common';
import { HeaderSectionComponent } from '../../features/boring/header-section/header-section.component';
import { AboutSectionComponent } from '../../features/boring/about-section/about-section.component';
import { DataStripComponent } from '../../shared/components/data-strip/data-strip.component';
import { FooterSectionComponent } from '../../features/boring/footer-section/footer-section.component';

@Component({
  selector: 'gt-boring-page',
  standalone: true,
  imports: [HeaderSectionComponent, DataStripComponent, AboutSectionComponent, MajorSectionComponent, TableSectionComponent, FooterSectionComponent],
  templateUrl: './boring-page.component.html',
  styleUrl: './boring-page.component.scss'
})
export class BoringPageComponent implements AfterViewInit, OnDestroy {

  expirienceData: CardData[] = [{
    heading: 'Altair',
    subHeading: 'March 2014 - March 2016',
    body: {
      heading: 'Software Developer',
      subHeading: 'Projects: RVS',
      content: '',
      list: [
        'Hands on experience with Java, SmartGwt, HTML, CSS and JS.',
        'Responsible for working in all phases of development.',
        'Integrated JavaScript library with SmartGwt.',
        'Created a fully functioning script executor that can interpret data and validate script.'
      ]
    }
  }, {
    heading: 'Century Link',
    subHeading: 'March 2016 - March 2018',
    body: {
      heading: 'Software Developer',
      subHeading: 'Projects: Maxx',
      content: '',
      list: [
        'Hands on experience with AngularJs 1.2, JS, HTML5, CSS3, Java and Camel.',
        'Responsible for working in all phases of development.',
        'Responsible for handling both front and back end.',
        'Got “Director’s Certificate of appreciation” for outstanding performance.'
      ]
    }
  }, {
    heading: 'Spice Digital',
    subHeading: 'March 2016 - October 2018',
    body: {
      heading: 'Sr. Software Developer',
      subHeading: 'Projects: Umang',
      content: '',
      list: [
        'Hands on experience with AngularJs 1.6, HTML5 and CSS3.',
        'Worked in developing most Ambitious project of Indian government,"Umang".',
        'Did multiple POCs and implemented many sub features like ePathshala, cbse, & DigiLocker.'
      ]
    }
  }, {
    heading: 'Century Link',
    subHeading: 'November 2016 - January 2022',
    body: {
      heading: 'Sr. Software Developer',
      subHeading: 'Projects: HealthCheck Tool, Parity Tool and ESHOP',
      content: '',
      list: [
        'Hands on experience with Angular (4 to 12), JS, HTML5, CSS3 and SASS.',
        'Working knowledge of front end optimization and performance techniques.',
        'Work with UX designer to help create then implement best design practices.'
      ]
    }
  }, {
    heading: 'Born Group',
    subHeading: 'January 2022 - Current',
    body: {
      heading: 'Sr. Software Developer',
      subHeading: 'Projects: Mutiple e-Commerece and Banking web app',
      content: '',
      list: [
        'Hands on experience in Angular 13-17, Spartacus 4 - 2211.20, Nodejs, HTML5, CSS3, Nextjs and Reactjs.',
        'Developing new features and code review for multiple e-commerce projects. ',
        'Leading the UI Team.',
        'Experience in upgrading Spartacus versions.'
      ]
    }
  }
  ]

  educationData: CardData[] =[{
    heading: 'B. Tech.',
    subHeading: 'March 2008 - March 2012',
    body: {
      heading: 'Computer Science and Engineering',
      subHeading: 'Gautam Buddha Technical University',
    }
  }]

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
