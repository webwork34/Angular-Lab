import { ClickerService } from './../../../services/clicker.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.scss'],
})
export class InfoFieldComponent implements OnInit {
  constructor(public clickerService: ClickerService, private router: Router) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      seconds: new FormControl('10'),
    });

    this.clickerService.seconds = +this.form.value.seconds;
    this.clickerService.interval = this.form.value.seconds;
  }

  changeRadio(e) {
    this.clickerService.seconds = +e.target.value;
    this.clickerService.interval = e.target.value;
  }

  newRound() {
    this.clickerService.newRound();
    this.clickerService.seconds = this.form.value.seconds;
  }

  changeName() {
    this.router.navigate(['/clicker']);
    this.clickerService.newRound();
  }

  showRecords() {
    this.router.navigate(['/clicker/records']);
    this.clickerService.newRound();
  }
}
