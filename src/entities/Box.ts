/**
 * An axis aligned rectangle
 */
export interface Box {
  x: number
  y: number
  w: number
  h: number
}

export class Box implements Box {
  /**
   * An axis aligned rectangle
   */
  constructor(
    public x:number,
    public y:number,
    public w:number,
    public h:number
  ) {}
}
