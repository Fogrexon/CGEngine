import { UniformValue } from '../UniformValue';

/**
 * Vector3
 *
 * @export
 * @class Vector3
 * @extends {UniformValue<Vector3>}
 */
export class Vector3 extends UniformValue<Vector3> {
  /**
   * first value
   *
   * @type {number}
   * @memberof Vector3
   */
  public x: number;

  /**
   * second value
   *
   * @type {number}
   * @memberof Vector3
   */
  public y: number;

  /**
   * third value
   *
   * @type {number}
   * @memberof Vector3
   */
  public z: number;

  /**
   * Creates an instance of Vector3.
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @memberof Vector3
   */
  constructor(_x: number, _y: number, _z: number) {
    super();
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  /**
   * Set values
   *
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public set(x: number, y: number, z: number): Vector3 {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  /**
   * Squared length
   *
   * @return {*}  {number}
   * @memberof Vector3
   */
  public length2(): number {
    return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0;
  }

  /**
   * Length
   *
   * @return {*}  {number}
   * @memberof Vector3
   */
  public length(): number {
    return Math.sqrt(this.length2());
  }

  /**
   * Distance between two vectors
   *
   * @param {Vector3} a
   * @return {*}  {number}
   * @memberof Vector3
   */
  public distance(a: Vector3): number {
    return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2);
  }

  /**
   * Add vecotr3 or number
   *
   * @param {(Vector3 | number)} a
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public add(a: Vector3 | number): Vector3 {
    if (a instanceof Vector3) return new Vector3(this.x + a.x, this.y + a.y, this.z + a.z);
    return new Vector3(this.x + a, this.y + a, this.z + a);
  }

  /**
   * Subtract vector3 or number
   *
   * @param {(Vector3 | number)} a
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public subtract(a: Vector3 | number): Vector3 {
    if (a instanceof Vector3) return new Vector3(this.x - a.x, this.y - a.y, this.z - a.z);
    return new Vector3(this.x - a, this.y - a, this.z - a);
  }

  /**
   * Multiply vector3 or number
   *
   * @param {(Vector3 | number)} a
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public multiply(a: Vector3 | number): Vector3 {
    if (a instanceof Vector3) return new Vector3(this.x * a.x, this.y * a.y, this.z * a.z);
    return new Vector3(this.x * a, this.y * a, this.z * a);
  }

  /**
   * Divide with vector3 or number (if zero value, show erro in console)
   *
   * @param {(Vector3 | number)} a
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public divide(a: Vector3 | number): Vector3 {
    if (a instanceof Vector3) {
      // eslint-disable-next-line no-console
      console.assert(!(a.x === 0 || a.y === 0 || a.z === 0), 'cannot divide by zero');
      return new Vector3(this.x / a.x, this.y / a.y, this.z / a.z);
    }

    // eslint-disable-next-line no-console
    console.assert(a !== 0, 'cannot divide by zero');
    return new Vector3(this.x / a, this.y / a, this.z / a);
  }

  /**
   * Get normalized vector
   *
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public normalize(): Vector3 {
    return this.divide(this.length());
  }

  /**
   * Inner product
   *
   * @param {Vector3} a
   * @return {*}  {number}
   * @memberof Vector3
   */
  public dot(a: Vector3): number {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  }

  /**
   * Outer product
   *
   * @param {Vector3} a
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public cross(a: Vector3): Vector3 {
    return new Vector3(
      this.y * a.z - this.z * a.y,
      this.z * a.x - this.x * a.z,
      this.x * a.y - this.y * a.x
    );
  }

  /**
   * Is equal
   *
   * @param {Vector3} a
   * @return {*}  {boolean}
   * @memberof Vector3
   */
  public equals(a: Vector3): boolean {
    return this.x === a.x && this.y === a.y && this.z === a.z;
  }

  /**
   * Clone vector
   *
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  public clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * Get Float32Array
   *
   * @return {*}  {Float32Array}
   * @memberof Vector3
   */
  public getArray(): Float32Array {
    return new Float32Array([this.x, this.y, this.z]);
  }

  /**
   * Set values to shader
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Vector3
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform3fv(uniLocation, this.getArray());
  }
}
