import { ICoord } from 'src/app/interfaces';
import { Figure } from './Figure.class';
import { Point } from './Point.class';
import { isPointsOnLine } from './../shared/isPointsOnLine';

export class Quadrangle extends Figure {
  p1: ICoord;
  p2: ICoord;
  p3: ICoord;
  p4: ICoord;

  side1: number;
  side2: number;
  side3: number;
  side4: number;

  constructor(p1: ICoord, p2: ICoord, p3: ICoord, p4: ICoord) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;

    this.side1 = Point.distance(p1, p2);
    this.side2 = Point.distance(p2, p3);
    this.side3 = Point.distance(p3, p4);
    this.side4 = Point.distance(p4, p1);
  }

  isQuadrangle(p1: ICoord, p2: ICoord, p3: ICoord, p4: ICoord) {
    if (
      isPointsOnLine(p2, p3, p4) ||
      isPointsOnLine(p1, p3, p4) ||
      isPointsOnLine(p1, p2, p4) ||
      isPointsOnLine(p1, p2, p3)
    ) {
      return false;
    }
    return true;
  }

  sayMyName() {
    if (!this.isQuadrangle(this.p1, this.p2, this.p3, this.p4)) {
      return `Quadrangle cannot be constructed`;
    } else if (
      this.side1 === this.side2 &&
      this.side1 === this.side3 &&
      this.side1 === this.side4
    ) {
      return 'I am square';
    } else if (
      (this.side1 === this.side2 && this.side3 === this.side4) ||
      (this.side1 === this.side3 && this.side2 === this.side4) ||
      (this.side1 === this.side4 && this.side2 === this.side3)
    ) {
      return 'I am rectangle or parallelogram or rhomb';
    } else {
      return 'I am Quadrangle';
    }
  }

  getPerimetr() {
    if (this.isQuadrangle(this.p1, this.p2, this.p3, this.p4)) {
      return this.side1 + this.side2 + this.side3 + this.side4;
    }

    return `Quadrangle cannot be constructed`;
  }

  getArea() {
    if (this.isQuadrangle(this.p1, this.p2, this.p3, this.p4)) {
      const p = (this.side1 + this.side2 + this.side3 + this.side4) / 2;
      return Math.sqrt(
        (p - this.side1) *
          (p - this.side2) *
          (p - this.side3) *
          (p - this.side4)
      );
    }
    return `Quadrangle cannot be constructed`;
  }

  draw(canvas: any) {
    let ctx;
    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    } else {
      return;
    }

    this.clear(canvas);

    if (this.isQuadrangle(this.p1, this.p2, this.p3, this.p4)) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(25, -25);
      ctx.moveTo(this.p1.x, this.p1.y);
      ctx.lineTo(this.p2.x, this.p2.y);
      ctx.lineTo(this.p3.x, this.p3.y);
      ctx.lineTo(this.p4.x, this.p4.y);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.restore();
    } else {
      ctx.font = '20px serif';
      ctx.fillStyle = 'red';
      ctx.fillText('Quadrangle cannot be constructed', 10, 75);
    }
  }

  clear(canvas: any) {
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 300, 150);
      ctx.beginPath();
    } else {
      return;
    }
  }
}
