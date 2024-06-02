import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, take, tap } from 'rxjs';
import { FloatButtonComponent } from '../../../shared/components/float-button/float-button.component';
import { MatrixService } from '../../../shared/services/matrix.service';

@Component({
  selector: 'gt-matrix-terminal-window',
  standalone: true,
  imports: [
    CommonModule,
    FloatButtonComponent
  ],
  templateUrl: './matrix-terminal-window.component.html',
  styleUrl: './matrix-terminal-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    MatrixService
  ]
})
export class MatrixTerminalWindowComponent {

  message$ = this.matrixService.message$.pipe(tap(() => {
    this.messageRef?.nativeElement.scrollIntoView({behavior: 'smooth', offsetTop: -50});
  }));
  protected typeThis$ = this.matrixService.writeLine$;

  messaegIndex = 0;
  @ViewChild('message', { static: false }) messageRef: ElementRef | undefined;
  private tempHolder: string[] = [];

  @Input() showDialogBox = true;
  private _createdPValue = new BehaviorSubject<string[]>([]);
  protected createdPValue$ = this._createdPValue.asObservable();

  constructor(
    private matrixService: MatrixService
  ) { }

  ngOnInit(): void {
    this.tempHolder.length = 0;
  }

  close() { }

  scrollToBottom(ele: any): void {
    try {
      if (ele !== null)
        ele.nativeElement.scrollTop = ele.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
