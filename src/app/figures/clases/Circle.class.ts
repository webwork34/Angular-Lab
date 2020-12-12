import { ICoord } from 'src/app/interfaces';
import { Figure } from './Figure.class';
import { Point } from './Point.class';

function isOnePoint(p1: ICoord, p2: ICoord) {
  if (p1.x === p2.x && p1.y === p2.y) {
    return true;
  }
  return false;
}

export class Circle extends Figure {
  p1: ICoord;
  p2: ICoord;
  radius: number;

  constructor(p1: ICoord, p2: ICoord) {
    super();
    this.p1 = p1;
    this.p2 = p2;

    this.radius = Point.distance(p1, p2);
  }

  sayMyName() {
    if (!isOnePoint(this.p1, this.p2)) {
      return 'I am circle';
    }

    return 'Circle cannot ne constructed';
  }

  getPerimetr() {
    if (!isOnePoint(this.p1, this.p2)) {
      return 2 * this.radius * Math.PI;
    }

    return 'Circle cannot ne constructed';
  }

  getArea() {
    if (!isOnePoint(this.p1, this.p2)) {
      return Math.PI * this.radius ** 2;
    }

    return 'Circle cannot ne constructed';
  }

  draw(canvas: any) {
    let ctx;
    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    } else {
      return;
    }

    this.clear(canvas);

    if (!isOnePoint(this.p1, this.p2)) {
      ctx.beginPath();
      ctx.save();
      ctx.translate(0, canvas.height);
      ctx.scale(5, -5);
      ctx.arc(20, 15, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.restore();
    } else {
      ctx.font = '20px serif';
      ctx.fillStyle = 'red';
      ctx.fillText('Circle cannot be constructed', 30, 75);
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
