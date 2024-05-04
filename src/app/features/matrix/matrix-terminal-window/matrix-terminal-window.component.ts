import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FloatButtonComponent } from '../../../shared/components/float-button/float-button.component';

@Component({
  selector: 'gt-matrix-terminal-window',
  standalone: true,
  imports: [
    CommonModule,
    FloatButtonComponent,
  ],
  templateUrl: './matrix-terminal-window.component.html',
  styleUrl: './matrix-terminal-window.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MatrixTerminalWindowComponent {

  messageArray = [
    'Hello Neo',
    'Since you been looking for a good UI developer?',
    "But you are in a matrix Neo, that is why you can't find one.",
    'So I took you out of matrix, to show you the truth.',
    'My name is Gaurav Tyagi.',
    'I am a UI developer and a movie buff.',
    'I have worked on multiple domains like Banking, e-comerece etc.',
    'I know Angular, Spartacus, TypeScript, Reactjs, Nextjs, Nodejs.',
    'So if you want to contact me follow the white rabbit.',
  ];
  private onClose = [
    'Hey',
    "don't close the window",
    'I am not done',
    'Stop this',
    'Go on close again',
    'what were you expecting?'
  ]
  messaegIndex = 0;
  private tempHolder = '';

  @Input() showDialogBox = true;
  private _typeThis = new BehaviorSubject('');
  protected typeThis$ = this._typeThis.asObservable();

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.createPara();
  }

  close() {
    this.showDialogBox = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showDialogBox = true;
      this.cdr.detectChanges();
    }, Math.random() * 5000)
  }

  createPara(str?: string) {
    this.el.nativeElement.querySelector("p")?.classList.remove('blinker');
    this.updateTyping(this.messageArray[this.messaegIndex]);
    if (str)
      this.tempHolder += JSON.parse(JSON.stringify(`<p>${str}</p>`));
  }

  updateTyping(str: string) {
    if (!str) return;
    let count = str.length;
    const interval = setInterval(() => {
      this._typeThis.next(`
      ${this.tempHolder}
      <p class="blinker">${str.split('').reverse().slice(count).reverse().join('')}</p>
      `);
      this.cdr.detectChanges();
      if (!count) {
        if (this.messaegIndex < this.messageArray.length) {
          this.messaegIndex++;
          this.createPara(str);
        }
        clearInterval(interval);
      };
      count--;
    }, 100);
  }
}
