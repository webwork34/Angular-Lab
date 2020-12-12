// import { IFigure } from './../interfaces';
// import { IPoints } from './../interfaces';
// import { Injectable } from '@angular/core';
// import { Quadrangle } from '../figures/clases/quadrangle';
// import { Point } from '../figures/clases/Point';

// @Injectable({
//   providedIn: 'root',
// })
// export class FiguresService {
//   constructor() {}

//   build(data: IPoints): IFigure {
//     return new Quadrangle(
//       new Point(data.p_1_x, data.p_1_y),
//       new Point(data.p_2_x, data.p_2_y),
//       new Point(data.p_3_x, data.p_3_y),
//       new Point(data.p_4_x, data.p_4_y)
//     );
//   }

//   sayMyName(data: IPoints): string {
//     const q = this.build(data);

//     return q.sayMyName();
//   }

//   getPerimetr(data: IPoints): number {
//     const q = this.build(data);

//     return q.getPerimetr();
//   }

//   getArea(data: IPoints): number {
//     const q = this.build(data);

//     return q.getArea();
//   }

//   drawF(data: IPoints, canvas: any) {
//     const q = this.build(data);
//     q.draw(canvas);
//   }

//   cleaer(data: IPoints, canvas: any) {
//     const q = this.build(data);
//     q.clear(canvas);
//   }
// }
