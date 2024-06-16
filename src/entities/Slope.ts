/**
  * A right angled, axis aligned, triangle
  * @param x 
  * @param y 
  * @param w distance from x to the other end of the horizontal leg of the triangle (could be negative)
  * @param h distance from y to the other end of the vertical leg of the triangle (could be negative)
 */
export interface Slope {
  x: number
  y: number
  w: number // can be negative
  h: number // can be negative
}

export class Slope implements Slope {
  /**
   * A right angled, axis aligned, triangle
   * @param x 
   * @param y 
   * @param w distance from x to the other end of the horizontal leg of the triangle (could be negative)
   * @param h distance from y to the other end of the vertical leg of the triangle (could be negative)
   */
  constructor(
    public x: number,
    public y: number,
    public w: number, // can be negative
    public h: number // can be negative
  ) {}
}
