import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss'],
})
export class LolComponent implements OnInit {
  constructor() {}

  age = 35;
  word = 'XXX';

  ngOnInit(): void {}

  getRendom() {
    return Math.floor(Math.random() * 1000);
  }

  showMessage() {
    this.age = this.getRendom();
  }
}
