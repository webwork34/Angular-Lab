import { ICoord } from 'src/app/interfaces';

export function isPointsOnLine(p1: ICoord, p2: ICoord, p3: ICoord) {
  return (
    p3.x * (p2.y - p1.y) - p3.y * (p2.x - p1.x) === p1.x * p2.y - p2.x * p1.y
  );
}
