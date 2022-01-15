import { UniformValue } from "./UniformValue";

export class Color extends UniformValue<Color> {
  public r: number;

  public g: number;

  public b: number;

  public a: number;

  constructor(_r: number, _g: number, _b: number, _a: number = 1.0) {
    super();
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.a = _a;
  }

  public equals(a: Color) {
    return this.r === a.r && this.g === a.g && this.b === a.b && this.a === a.a;
  }

  public clone() {
    return new Color(this.r, this.g, this.b, this.a)
  }

  public getArray(): Float32Array {
    return new Float32Array([this.r, this.g, this.b, this.a]);
  }

  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform4fv(uniLocation, this.getArray());
  }

}
