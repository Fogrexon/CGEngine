import { UniformValue } from '../UniformValue';

/**
 * Vector4
 *
 * @export
 * @class Vector4
 * @extends {UniformValue<Vector4>}
 */
export class Vector4 extends UniformValue<Vector4> {
  /**
   * first value
   *
   * @type {number}
   * @memberof Vector4
   */
  public x: number;

  /**
   * second value
   *
   * @type {number}
   * @memberof Vector4
   */
  public y: number;

  /**
   * third value
   *
   * @type {number}
   * @memberof Vector4
   */
  public z: number;

  /**
   * fourth value
   *
   * @type {number}
   * @memberof Vector4
   */
  public w: number;

  /**
   * Creates an instance of Vector4.
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @param {number} _w
   * @memberof Vector4
   */
  constructor(_x: number, _y: number, _z: number, _w: number) {
    super();
    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.w = _w;
  }

  /**
   * Set values
   *
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public set(x: number, y: number, z: number, w: number): Vector4 {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }

  /**
   * Squared length
   *
   * @return {*}  {number}
   * @memberof Vector4
   */
  public length2(): number {
    return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0 + this.w ** 2.0;
  }

  /**
   * Length
   *
   * @return {*}  {number}
   * @memberof Vector4
   */
  public length(): number {
    return Math.sqrt(this.length2());
  }

  /**
   * Distance between two vectors
   *
   * @param {Vector4} a
   * @return {*}  {number}
   * @memberof Vector4
   */
  public distance(a: Vector4): number {
    return Math.sqrt(
      (this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2 + (this.w - a.w) ** 2
    );
  }

  /**
   * Add vector4 or number
   *
   * @param {(Vector4 | number)} a
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public add(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
    }
    return new Vector4(this.x + a, this.y + a, this.z + a, this.w + a);
  }

  /**
   * Subtract vector4 or number
   *
   * @param {(Vector4 | number)} a
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public subtract(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w);
    }
    return new Vector4(this.x - a, this.y - a, this.z - a, this.w - a);
  }

  /**
   * Multiply vector4 or number
   *
   * @param {(Vector4 | number)} a
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public multiply(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x * a.x, this.y * a.y, this.z * a.z, this.w * a.w);
    }
    return new Vector4(this.x * a, this.y * a, this.z * a, this.w * a);
  }

  /**
   * Divide vector4 or number (if zero value, show error in console)
   *
   * @param {(Vector4 | number)} a
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public divide(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      // eslint-disable-next-line no-console
      console.assert(!(a.x === 0 || a.y === 0 || a.z === 0 || a.w === 0), 'cannot divide by zero');
      return new Vector4(this.x / a.x, this.y / a.y, this.z / a.z, this.w / a.w);
    }
    // eslint-disable-next-line no-console
    console.assert(a !== 0, 'cannot divide by zero');
    return new Vector4(this.x / a, this.y / a, this.z / a, this.w / a);
  }

  /**
   * Normalized vector
   *
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public normalize(): Vector4 {
    return this.divide(this.length());
  }

  /**
   * Inner product
   *
   * @param {Vector4} a
   * @return {*}  {number}
   * @memberof Vector4
   */
  public dot(a: Vector4): number {
    return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
  }

  /**
   * Is equal
   *
   * @param {Vector4} a
   * @return {*}  {boolean}
   * @memberof Vector4
   */
  public equals(a: Vector4): boolean {
    return this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w;
  }

  /**
   * Clone vector
   *
   * @return {*}  {Vector4}
   * @memberof Vector4
   */
  public clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  /**
   * Get Float32Array
   *
   * @return {*}  {Float32Array}
   * @memberof Vector4
   */
  public getArray(): Float32Array {
    return new Float32Array([this.x, this.y, this.z, this.w]);
  }

  /**
   * Set values to shader
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Vector4
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform4fv(uniLocation, this.getArray());
  }
}
