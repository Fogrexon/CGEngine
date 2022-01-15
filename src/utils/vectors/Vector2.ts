import { UniformValue } from '../UniformValue';

/**
 * Vector2
 *
 * @export
 * @class Vector2
 * @extends {UniformValue<Vector2>}
 */
export class Vector2 extends UniformValue<Vector2> {
  /**
   * first value
   *
   * @type {number}
   * @memberof Vector2
   */
  public x: number;

  /**
   * second value
   *
   * @type {number}
   * @memberof Vector2
   */
  public y: number;

  /**
   * Creates an instance of Vector2.
   * @param {number} [_x=0]
   * @param {number} _y
   * @memberof Vector2
   */
  constructor(_x: number = 0, _y: number) {
    super();
    this.x = _x;
    this.y = _y || _x;
  }

  /**
   * set value
   *
   * @param {number} x
   * @param {number} y
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public set(x: number, y: number): Vector2 {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Squared length
   *
   * @return {*}  {number}
   * @memberof Vector2
   */
  public length2(): number {
    return this.x ** 2.0 + this.y ** 2.0;
  }

  /**
   * Length
   *
   * @return {*}  {number}
   * @memberof Vector2
   */
  public length(): number {
    return Math.sqrt(this.length2());
  }

  /**
   * Distance between two vectors
   *
   * @param {Vector2} a
   * @return {*}  {number}
   * @memberof Vector2
   */
  public distance(a: Vector2): number {
    return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2);
  }

  /**
   * Add vector2 or number
   *
   * @param {(Vector2 | number)} a
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public add(a: Vector2 | number): Vector2 {
    if (a instanceof Vector2) return new Vector2(this.x + a.x, this.y + a.y);
    return new Vector2(this.x + a, this.y + a);
  }

  /**
   * Subtract vector2 or number
   *
   * @param {(Vector2 | number)} a
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public subtract(a: Vector2 | number): Vector2 {
    if (a instanceof Vector2) return new Vector2(this.x - a.x, this.y - a.y);
    return new Vector2(this.x - a, this.y - a);
  }

  /**
   * Multiply vector2 or number
   *
   * @param {(Vector2 | number)} a
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public multiply(a: Vector2 | number): Vector2 {
    if (a instanceof Vector2) return new Vector2(this.x * a.x, this.y * a.y);
    return new Vector2(this.x * a, this.y * a);
  }

  /**
   * Divide with vector2 or number (if zero value, show error to console)
   *
   * @param {(Vector2 | number)} a
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public divide(a: Vector2 | number): Vector2 {
    if (a instanceof Vector2) {
      // eslint-disable-next-line no-console
      console.assert(!(a.x === 0 || a.y === 0), 'cannot divide by zero');
      return new Vector2(this.x / a.x, this.y / a.y);
    }
    // eslint-disable-next-line no-console
    console.assert(a !== 0, 'cannot divide by zero');
    return new Vector2(this.x / a, this.y / a);
  }

  /**
   * Normalized vector
   *
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public normalize(): Vector2 {
    return this.divide(this.length());
  }

  /**
   * Inner product
   *
   * @param {Vector2} a
   * @return {*}  {number}
   * @memberof Vector2
   */
  public dot(a: Vector2): number {
    return this.x * a.x + this.y * a.y;
  }

  /**
   * Is equal
   *
   * @param {Vector2} a
   * @return {*}  {boolean}
   * @memberof Vector2
   */
  public equals(a: Vector2): boolean {
    return this.x === a.x && this.y === a.y;
  }

  /**
   * Clone vector
   *
   * @return {*}  {Vector2}
   * @memberof Vector2
   */
  public clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  /**
   * Get Float32Array
   *
   * @return {*}  {Float32Array}
   * @memberof Vector2
   */
  public getArray(): Float32Array {
    return new Float32Array([this.x, this.y]);
  }

  /**
   * Set value to shader
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Vector2
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform2fv(uniLocation, this.getArray());
  }
}
