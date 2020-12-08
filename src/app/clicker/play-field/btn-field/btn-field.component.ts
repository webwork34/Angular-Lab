import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClickerService } from 'src/app/services/clicker.service';

@Component({
  selector: 'app-btn-field',
  templateUrl: './btn-field.component.html',
  styleUrls: ['./btn-field.component.scss'],
})
export class BtnFieldComponent implements OnInit, OnDestroy {
  constructor(public clickerService: ClickerService) {}

  name: string;

  ngOnInit(): void {
    this.name = this.clickerService.storage('playerName')
      ? this.clickerService.storage('playerName')
      : 'Player';
  }

  ngOnDestroy() {
    this.clickerService.newRound();
  }

  start() {
    if (!this.clickerService.isStarted) {
      this.clickerService.isStarted = true;
      this.clickerService.startGame();
      this.clickerService.count--;
    } else {
      this.clickerService.startGame();
    }
  }
}
