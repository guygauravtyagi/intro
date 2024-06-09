import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gt-start-war-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-war-page.component.html',
  styleUrl: './start-war-page.component.scss'
})
export class StartWarPageComponent implements AfterViewInit {
  @ViewChild('scroller') scroller!: ElementRef;
  @ViewChild('holder') holder!: ElementRef;

  ngAfterViewInit(): void {
    let scroller = this.scroller.nativeElement;
    if (scroller.addEventListener) {
      scroller.addEventListener("mousewheel", (event: any) => {
        this.MouseWheelHandler(event);
      }, false);
      scroller.addEventListener("DOMMouseScroll", (event: any) => {
        this.MouseWheelHandler(event);
      }, false);
    } else scroller.attachEvent("onmousewheel", (event: any) => {
      this.MouseWheelHandler(event);
    });
  }

  MouseWheelHandler(e: any) {
    var e = window.event || e;
    let par = this.scroller.nativeElement;
    let chi = this.holder.nativeElement;
    var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));
    var pst = par.scrollLeft + delta;
    if (pst < 0) {
      pst = 0;
    } else if (pst > chi.width) {
      pst = chi.width;
    }
    par.scrollLeft = pst;
    return false;
  }
}
