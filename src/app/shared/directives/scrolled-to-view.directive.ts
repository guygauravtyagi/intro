import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subscription, fromEvent, startWith } from 'rxjs';

@Directive({
  selector: '[gtScrolledToView]',
  standalone: true
})
export class ScrolledToViewDirective {
  
  @Output() gtScrolledToView: EventEmitter<void>;
  @Output() gtScrolledOutView: EventEmitter<void>;

  elementPos!: number;
  elementHeight!: number;

  scrollPos!: number;
  windowHeight!: number;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  constructor(private element: ElementRef) {
    this.gtScrolledToView = new EventEmitter<void>();
    this.gtScrolledOutView = new EventEmitter<void>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    if (typeof window !== "undefined")
      this.windowHeight = window?.innerHeight;
  }
  saveScrollPos() {
    if (typeof window !== "undefined")
      this.scrollPos = window?.scrollY;
  }
  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  
  checkVisibility() {
    if (this.isNotVisible()) {
      this.saveDimensions();
      if (this.isNotVisible()) {
        this.subscribe();
        this.gtScrolledOutView.emit();
      }
    }
    if (this.isVisible()) {
      this.saveDimensions();
      if (this.isVisible()) {
        this.unsubscribe();
        this.gtScrolledToView.emit();
      }
    }
  }

  isVisible() {
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= this.elementPos;
  }

  isNotVisible() {
    return this.scrollPos < this.elementPos || (this.scrollPos + this.windowHeight) < this.elementPos;
  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit() {
    if (typeof window !== "undefined")
      this.subscribe();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}
