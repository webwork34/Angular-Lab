import { ICoord } from 'src/app/interfaces';
import { Figure } from './Figure.class';
import { Point } from './Point.class';
import { isPointsOnLine } from './../shared/isPointsOnLine';

export class Triangle extends Figure {
  p1: ICoord;
  p2: ICoord;
  p3: ICoord;

  side1: number;
  side2: number;
  side3: number;

  constructor(p1: ICoord, p2: ICoord, p3: ICoord) {
    super();
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.side1 = Point.distance(p1, p2);
    this.side2 = Point.distance(p2, p3);
    this.side3 = Point.distance(p3, p1);
  }

  sayMyName() {
    if (isPointsOnLine(this.p1, this.p2, this.p3)) {
      return 'Triangle cannot be constructed';
    } else {
      if (this.side1 === this.side2 && this.side1 === this.side3) {
        return 'I am equilateral triangle';
      } else if (
        this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3
      ) {
        return 'I am equilateral triangle';
      } else {
        return 'I am simple triangle';
      }
    }
  }

  getPerimetr() {
    if (!isPointsOnLine(this.p1, this.p2, this.p3)) {
      return this.side1 + this.side2 + this.side3;
    }

    return `Triangle cannot be constructed`;
  }

  getArea() {
    if (!isPointsOnLine(this.p1, this.p2, this.p3)) {
      const p = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(
        p * (p - this.side1) * (p - this.side2) * (p - this.side3)
      );
    }
    return `Triangle cannot be constructed`;
  }

  draw(canvas: any) {
    let ctx;
    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    } else {
      return;
    }

    this.clear(canvas);

    if (!isPointsOnLine(this.p1, this.p2, this.p3)) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(25, -25);
      ctx.moveTo(this.p1.x, this.p1.y);
      ctx.lineTo(this.p2.x, this.p2.y);
      ctx.lineTo(this.p3.x, this.p3.y);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.restore();
    } else {
      ctx.font = '20px serif';
      ctx.fillStyle = 'red';
      ctx.fillText('Triangle cannot be constructed', 10, 75);
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
