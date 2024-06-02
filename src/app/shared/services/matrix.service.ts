import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { BehaviorSubject, Subject, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  private currentIndex = 0;
  private messageArray = [
    'Hello Neo',
    'I know you have been looking for a good UI developer.',
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

  private _message = new BehaviorSubject<string[]>([]);
  public message$ = this._message.asObservable().pipe(
    tap(() => {
      this.writeMessage();
    }));;

  private _writeLine = new BehaviorSubject<string>('');
  public writeLine$ = this._writeLine.asObservable();

  private isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  addNextLine(isCloseTried?: boolean) {
    if (this.currentIndex > this.messageArray.length) return;
    if (isCloseTried) {
      this._message.next([...this._message.value, this.onClose[Math.random() * 5]]);
    } else {
      this.currentIndex++;
      this._message.next([...this._message.value, this.messageArray[this.currentIndex - 1]]);
    }
  }

  writeMessage() {
    if(this.currentIndex >= this.messageArray.length) return;
    const str = this.messageArray[this.currentIndex];
    let count = str.length;
    if (this.isBrowser()) {
      const interval = setInterval(() => {
        this._writeLine.next(str.split('').reverse().slice(count).reverse().join(''));
        if (!count) {
          this.addNextLine(false);
          this._writeLine.next('');
          clearInterval(interval);
        };
        count--;
      }, 100);
    }
  }

}

