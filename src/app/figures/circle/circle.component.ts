/* eslint-disable max-len */
import { CircleService } from './../../services/figures/circle.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private circleService: CircleService) {}

  form: FormGroup;
  quadrangleName: string = null;
  perimetr: number = null;
  area: number = null;
  canvasEl: ElementRef;

  @ViewChild('canvas', { static: false }) canvasRef: ElementRef;

  ngOnInit(): void {
    this.form = new FormGroup({
      p_1_x: new FormControl(10, Validators.required),
      p_1_y: new FormControl(0, Validators.required),
      p_2_x: new FormControl(0, Validators.required),
      p_2_y: new FormControl(0, Validators.required),
    });
  }

  ngAfterViewInit() {
    this.canvasEl = this.canvasRef.nativeElement.parentElement.parentElement.nextSibling.firstChild;
  }

  ngOnDestroy() {
    this.reset();
  }

  sayMyName() {
    this.quadrangleName = this.circleService.sayMyName(this.form.value);
  }

  getPerimetr() {
    this.perimetr = this.circleService.getPerimetr(this.form.value);
  }

  getArea() {
    this.area = this.circleService.getArea(this.form.value);
  }

  draw() {
    this.circleService.drawF(this.form.value, this.canvasEl);
  }

  reset() {
    Object.keys(this.form.controls).forEach((control) =>
      this.form.controls[`${control}`].setValue(0)
    );
    this.quadrangleName = null;
    this.perimetr = null;
    this.area = null;
    this.circleService.cleaer(this.form.value, this.canvasEl);
  }
}
