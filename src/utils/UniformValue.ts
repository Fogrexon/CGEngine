/**
 * Passable to shader as uniform value
 *
 * @export
 * @abstract
 * @class UniformValue
 * @template T
 */
export abstract class UniformValue<T> {
  /**
   * check if two values are the same
   *
   * @abstract
   * @param {T} a
   * @return {*}  {boolean}
   * @memberof UniformValue
   */
  public abstract equals(a: T): boolean;

  /**
   * Clone value
   *
   * @abstract
   * @return {*}  {T}
   * @memberof UniformValue
   */
  public abstract clone(): T;

  /**
   * Get Float32Array
   *
   * @abstract
   * @return {*}  {Float32Array}
   * @memberof UniformValue
   */
  public abstract getArray(): Float32Array;

  /**
   * Set value to shader
   *
   * @abstract
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof UniformValue
   */
  public abstract setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation): void;
}
