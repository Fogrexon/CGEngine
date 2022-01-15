import { UniformValue } from './UniformValue';

/**
 * Float value
 *
 * @export
 * @class Float
 * @extends {UniformValue<Float>}
 */
export class Float extends UniformValue<Float> {
  /**
   * value
   *
   * @type {number}
   * @memberof Float
   */
  public value: number;

  /**
   * Creates an instance of Float.
   * @param {number} value
   * @memberof Float
   */
  constructor(value: number) {
    super();
    this.value = value;
  }

  /**
   * Clone number
   *
   * @return {*} 
   * @memberof Float
   */
  public clone() {
    return new Float(this.value);
  }

  /**
   * Is equal
   *
   * @param {Float} a
   * @return {*} 
   * @memberof Float
   */
  public equals(a: Float) {
    return this.value === a.value;
  }

  /**
   * Get Float32Array (not used)
   *
   * @return {*} 
   * @memberof Float
   */
  public getArray() {
    return new Float32Array([this.value]);
  }

  /**
   * Set values to shader
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Float
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform1f(uniLocation, this.value);
  }
}
