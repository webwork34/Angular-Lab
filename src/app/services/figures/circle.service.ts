import { Injectable } from '@angular/core';
import { Circle } from 'src/app/figures/clases/Circle.class';
import { Point } from 'src/app/figures/clases/Point.class';
import { IFigure, IPoints } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CircleService {
  constructor() {}

  build(data: IPoints): IFigure {
    return new Circle(
      new Point(data.p_1_x, data.p_1_y),
      new Point(data.p_2_x, data.p_2_y)
    );
  }

  sayMyName(data: IPoints): string {
    const t = this.build(data);

    return t.sayMyName();
  }

  getPerimetr(data: IPoints): number {
    const t = this.build(data);

    return t.getPerimetr();
  }

  getArea(data: IPoints): number {
    const t = this.build(data);

    return t.getArea();
  }

  drawF(data: IPoints, canvas: any) {
    const t = this.build(data);
    t.draw(canvas);
  }

  cleaer(data: IPoints, canvas: any) {
    const t = this.build(data);
    t.clear(canvas);
  }
}
