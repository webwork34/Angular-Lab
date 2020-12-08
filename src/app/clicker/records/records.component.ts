import { IResults } from './../../interfaces';
import { ClickerService } from 'src/app/services/clicker.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  constructor(private clickerService: ClickerService, private router: Router) {}

  results: IResults[];

  ngOnInit(): void {
    this.results = this.clickerService.storage('results');
  }

  back() {
    this.router.navigate(['/clicker/play-field']);
  }
}
