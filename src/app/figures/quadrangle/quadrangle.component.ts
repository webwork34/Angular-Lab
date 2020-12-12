/* eslint-disable max-len */
import { QuadrangleService } from './../../services/figures/quadrangle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-quadrangle',
  templateUrl: './quadrangle.component.html',
  styleUrls: ['./quadrangle.component.scss'],
})
export class QuadrangleComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private quadrangleService: QuadrangleService) {}

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
      p_2_x: new FormControl(3, Validators.required),
      p_2_y: new FormControl(0, Validators.required),
      p_3_x: new FormControl(5, Validators.required),
      p_3_y: new FormControl(2, Validators.required),
      p_4_x: new FormControl(2, Validators.required),
      p_4_y: new FormControl(2, Validators.required),
    });
  }

  ngAfterViewInit() {
    this.canvasEl = this.canvasRef.nativeElement.parentElement.parentElement.nextSibling.firstChild;
  }

  ngOnDestroy() {
    this.reset();
  }

  sayMyName() {
    this.quadrangleName = this.quadrangleService.sayMyName(this.form.value);
  }

  getPerimetr() {
    this.perimetr = this.quadrangleService.getPerimetr(this.form.value);
  }

  getArea() {
    this.area = this.quadrangleService.getArea(this.form.value);
  }

  draw() {
    this.quadrangleService.drawF(this.form.value, this.canvasEl);
  }

  reset() {
    Object.keys(this.form.controls).forEach((control) =>
      this.form.controls[`${control}`].setValue(0)
    );
    this.quadrangleName = null;
    this.perimetr = null;
    this.area = null;
    this.quadrangleService.cleaer(this.form.value, this.canvasEl);
  }
}
