import { Component } from '@angular/core';

@Component({
  selector: 'gt-tambola-page',
  standalone: true,
  imports: [],
  templateUrl: './tambola-page.component.html',
  styleUrl: './tambola-page.component.scss'
})
export class TambolaPageComponent {
  restartConfirmationVisible: boolean = false;
  gameStarted: boolean = false;
  numbers: {
    id: number;
    value: number;
    isSelected: boolean;
  }[] = Array.from({ length: 99 }, (_, i) => ({
    id: i + 1,
    value: i + 1,
    isSelected: false
  }));
  calledNumbers: number[] = [];
  numberLoading = false;
  popupNumberFlag = false;

  startGame() {
    this.gameStarted = true;
  }

  restartGame() {
    this.gameStarted = false;
    this.calledNumbers = [];
    this.restartConfirmationVisible = false;
  }

  openRestartConfirmation() {
    this.restartConfirmationVisible = true;
  }

  callNumber(event: Event) {
    this.numberLoading = true;
    setTimeout(() => {
      this.generateRandomNumber();
    }, 200);
  }

  generateRandomNumber() {
    if (this.calledNumbers.length >= this.numbers.length) {
      alert('All numbers have been called!');
      this.numberLoading = false;
      return;
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.numbers.length);
    } while (this.calledNumbers.includes(this.numbers[randomIndex].id));
    this.calledNumbers.push(this.numbers[randomIndex].id);
    this.selfHidePopupNumber();
    this.numberLoading = false;
  }

  closeConfirmation() {
    this.restartConfirmationVisible = false;
  }

  selfHidePopupNumber() {
    this.popupNumberFlag = true;
    setTimeout(() => {
      this.popupNumberFlag = false;
    }, 5000);
  }

}
