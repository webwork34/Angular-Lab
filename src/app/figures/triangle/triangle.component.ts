/* eslint-disable max-len */
import { TriangleService } from './../../services/figures/triangle.service';
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
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
})
export class TriangleComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private triangleService: TriangleService) {}

  form: FormGroup;
  quadrangleName: string = null;
  perimetr: number = null;
  area: number = null;
  canvasEl: ElementRef;

  @ViewChild('canvas', { static: false }) canvasRef: ElementRef;

  ngOnInit(): void {
    this.form = new FormGroup({
      p_1_x: new FormControl(0, Validators.required),
      p_1_y: new FormControl(0, Validators.required),
      p_2_x: new FormControl(4, Validators.required),
      p_2_y: new FormControl(0, Validators.required),
      p_3_x: new FormControl(2, Validators.required),
      p_3_y: new FormControl(5, Validators.required),
    });
  }

  ngAfterViewInit() {
    this.canvasEl = this.canvasRef.nativeElement.parentElement.parentElement.nextSibling.firstChild;
  }

  ngOnDestroy() {
    this.reset();
  }

  sayMyName() {
    this.quadrangleName = this.triangleService.sayMyName(this.form.value);
  }

  getPerimetr() {
    this.perimetr = this.triangleService.getPerimetr(this.form.value);
  }

  getArea() {
    this.area = this.triangleService.getArea(this.form.value);
  }

  draw() {
    this.triangleService.drawF(this.form.value, this.canvasEl);
  }

  reset() {
    Object.keys(this.form.controls).forEach((control) =>
      this.form.controls[`${control}`].setValue(0)
    );
    this.quadrangleName = null;
    this.perimetr = null;
    this.area = null;
    this.triangleService.cleaer(this.form.value, this.canvasEl);
  }
}
