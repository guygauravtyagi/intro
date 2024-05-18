import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatrixBackgroundComponent } from '../../features/matrix/matrix-background/matrix-background.component';
import { MatrixTerminalWindowComponent } from '../../features/matrix/matrix-terminal-window/matrix-terminal-window.component';
import { MatrixTitleIntroComponent } from '../../features/matrix/matrix-title-intro/matrix-title-intro.component';

@Component({
  selector: 'gt-matrix-page',
  standalone: true,
  templateUrl: './matrix-page.component.html',
  styleUrl: './matrix-page.component.scss',
  imports: [
    CommonModule,
    MatrixTitleIntroComponent,
    MatrixBackgroundComponent,
    MatrixTerminalWindowComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatrixPageComponent implements OnDestroy {

  constructor(
    private cdr: ChangeDetectorRef,    
    @Inject(DOCUMENT) private document: Document,
  ) { 
    this.document.body.classList.add('overflow-hidden'); 
  }
  ngOnDestroy(): void {  
    this.document.body.classList.remove('overflow-hidden');
  }

  protected drapesDown = false;
  protected interact = false;

  loadComplete(event: boolean) {
    this.drapesDown = event;
    this.cdr.detectChanges();
  }

}

