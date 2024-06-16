export interface Point {
  x: number
  y: number
}

export class Point implements Point {
  constructor(
    public x: number,
    public y: number
  ) {}
}
