import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, afterNextRender } from '@angular/core';

@Component({
  selector: 'gt-matrix-title-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-title-intro.component.html',
  styleUrl: './matrix-title-intro.component.scss',
  animations: [
    trigger('blink', [
      state('open', style({
        visibility: 'visible'
      })),
      state('closed', style({
        visibility: 'hidden'
      }))
    ])
  ]
})
export class MatrixTitleIntroComponent {

  protected isVisible = true;
  @Input() blinker = 2000;
  @Input() delay: number = 4;
  @Output() deploy: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      setTimeout(() => {
        this.addBlinker(0);
      }, this.delay*1000);
    })
  }

  addBlinker(revBlink = 0) {
    this.isVisible = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.blinker -= 200;
      this.isVisible = true;
      this.cdr.detectChanges();
      if (this.blinker !== 0)
        setTimeout(()=>{
          revBlink += 100;
          this.addBlinker(revBlink);
      }, this.blinker)
      else this.deploy.emit(true);
    }, revBlink);
  }

}
