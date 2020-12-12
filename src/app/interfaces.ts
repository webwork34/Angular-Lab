export interface Todo {
  title: string;
  completed: boolean;
  userId?: number;
  id?: number;
}

export interface IResults {
  clickCount: number;
  duration: string;
  name: string;
}

export interface ICoord {
  x: number;
  y: number;
}

export interface IPoints {
  p_1_x: number;
  p_1_y: number;
  p_2_x: number;
  p_2_y: number;
  p_3_x?: number;
  p_3_y?: number;
  p_4_x?: number;
  p_4_y?: number;
}

export interface IFigure {
  p1: ICoord;
  p2: ICoord;
  p3?: ICoord;
  p4?: ICoord;
  side1?: number;
  side2?: number;
  side3?: number;
  side4?: number;
  radius?: number;
  sayMyName: Function;
  getPerimetr: Function;
  getArea: Function;
  draw: Function;
  clear: Function;
}
