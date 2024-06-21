export class Slope {
    /**
     * A right angled, axis aligned, triangle
     * @param x
     * @param y
     * @param w distance from x to the other end of the horizontal leg of the triangle (could be negative)
     * @param h distance from y to the other end of the vertical leg of the triangle (could be negative)
     */
    constructor(x, y, w, // can be negative
    h // can be negative
    ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
