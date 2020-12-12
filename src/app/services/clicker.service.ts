import { IResults } from './../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickerService {
  constructor() {}

  timer;
  interval: string;
  seconds: number;
  count = 0;
  controlTimer = false;
  endCount = false;
  isDisabled = false;
  isStarted = false;
  isChampion = false;
  nameBtn = 'Click to start';
  gameResult: string = '';
  previousRecord: string = '';

  resultsArr: IResults[];

  resultObj: Partial<IResults> = {};

  writeLS(time: string, clicks: number) {
    this.resultsArr = this.storage('results') || [];
    let index: number;
    if (this.resultsArr.length !== 0) {
      const isMatch = this.resultsArr.some((item: IResults, idx: number) => {
        index = idx;
        return item.duration === `${time} sec`;
      });

      if (isMatch) {
        if (this.resultsArr[index].clickCount < clicks) {
          this.previousRecord = `Previous record for ${time} sec was
            ${this.resultsArr[index].clickCount} clicks.`;

          this.resultsArr[index].clickCount = clicks;
          this.resultsArr[index].name = this.storage('playerName') || 'No name';
          this.isChampion = true;

          this.gameResult = `Congratulation!!!
          You set new record for ${time} sec = ${clicks} clicks.`;

          return this.storage('results', this.resultsArr);
        }
        this.previousRecord = `Current record for ${time} sec is
          ${this.resultsArr[index].clickCount} clicks.`;

        this.gameResult = `Your result isn't enough for being the champion.`;
        return;
      } else {
        this.previousRecord = `Previous record for ${time} sec was 0 clicks.`;
        this.resultObj.duration = `${this.interval} sec`;
        this.resultObj.clickCount = clicks;
        this.resultObj.name = this.storage('playerName') || 'No name';
        this.resultsArr.push(this.resultObj as IResults);
        this.isChampion = true;
        this.gameResult = `Congratulation!!!
          You set new record for ${time} sec = ${clicks} clicks.`;
        return this.storage('results', this.resultsArr);
      }
    } else {
      this.previousRecord = `Previous record for ${time} sec was 0 clicks.`;
      this.resultObj.duration = `${this.interval} sec`;
      this.resultObj.clickCount = clicks;
      this.resultObj.name = this.storage('playerName') || 'No name';
      this.resultsArr.push(this.resultObj as IResults);
      this.isChampion = true;
      this.gameResult = `Congratulation!!!
        You set new record for ${time} sec = ${clicks} clicks.`;
    }

    this.storage('results', this.resultsArr);
  }

  storage(key: string, data = null) {
    if (!data) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  startGame() {
    this.isStarted = true;
    this.nameBtn = 'Click to count';
    this.isDisabled = true;
    this.count++;
    if (!this.controlTimer) {
      this.controlTimer = true;
      this.timer = setInterval(() => {
        this.seconds--;
        if (!this.seconds) {
          this.endCount = true;
          clearInterval(this.timer);
          this.writeLS(this.interval, this.count);
          this.isDisabled = false;
        }
      }, 1000);
    }
  }

  newRound() {
    this.isDisabled = false;
    this.count = 0;
    clearInterval(this.timer);
    this.controlTimer = false;
    this.nameBtn = 'Click to start';
    this.isStarted = false;
    this.endCount = false;
    this.isChampion = false;
    this.gameResult = '';
    this.previousRecord = '';
  }
}
