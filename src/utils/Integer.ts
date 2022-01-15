import { UniformValue } from './UniformValue';

/**
 * Integer
 *
 * @export
 * @class Integer
 * @extends {UniformValue<Integer>}
 */
export class Integer extends UniformValue<Integer> {
  /**
   * value
   *
   * @type {number}
   * @memberof Integer
   */
  public value: number;

  /**
   * Creates an instance of Integer.
   * @param {number} value
   * @memberof Integer
   */
  constructor(value: number) {
    super();
    this.value = value;
  }

  /**
   * Clone value
   *
   * @return {*} 
   * @memberof Integer
   */
  public clone() {
    return new Integer(this.value);
  }

  /**
   * Is equal
   *
   * @param {Integer} a
   * @return {*} 
   * @memberof Integer
   */
  public equals(a: Integer) {
    return this.value === a.value;
  }

  /**
   * Get Float32Array
   *
   * @return {*} 
   * @memberof Integer
   */
  public getArray() {
    return new Float32Array([this.value]);
  }

  /**
   * Set value to shader
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Integer
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform1i(uniLocation, this.value);
  }
}
