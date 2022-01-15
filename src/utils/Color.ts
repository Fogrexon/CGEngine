import { UniformValue } from './UniformValue';

/**
 * Color
 *
 * @export
 * @class Color
 * @extends {UniformValue<Color>}
 */
export class Color extends UniformValue<Color> {
  /**
   * red value (0 ~ 1)
   *
   * @type {number}
   * @memberof Color
   */
  public r: number;

  /**
   * green value (0 ~ 1)
   *
   * @type {number}
   * @memberof Color
   */
  public g: number;

  /**
   * blue value (0 ~ 1)
   *
   * @type {number}
   * @memberof Color
   */
  public b: number;

  /**
   * alpha value (0 ~ 1)
   *
   * @type {number}
   * @memberof Color
   */
  public a: number;

  /**
   * Creates an instance of Color.
   * @param {number} _r
   * @param {number} _g
   * @param {number} _b
   * @param {number} [_a=1.0]
   * @memberof Color
   */
  constructor(_r: number, _g: number, _b: number, _a: number = 1.0) {
    super();
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.a = _a;
  }

  /**
   * Is equal
   *
   * @param {Color} a
   * @return {*} 
   * @memberof Color
   */
  public equals(a: Color) {
    return this.r === a.r && this.g === a.g && this.b === a.b && this.a === a.a;
  }

  /**
   * Clone color
   *
   * @return {*} 
   * @memberof Color
   */
  public clone() {
    return new Color(this.r, this.g, this.b, this.a);
  }

  /**
   * Get Float32Array
   *
   * @return {*}  {Float32Array}
   * @memberof Color
   */
  public getArray(): Float32Array {
    return new Float32Array([this.r, this.g, this.b, this.a]);
  }

  /**
   * Set values to shaders
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLUniformLocation} uniLocation
   * @memberof Color
   */
  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform4fv(uniLocation, this.getArray());
  }
}
