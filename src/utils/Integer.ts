import { UniformValue } from './UniformValue';

export class Integer extends UniformValue<Integer> {
  public value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  public clone() {
    return new Integer(this.value);
  }

  public equals(a: Integer) {
    return this.value === a.value;
  }

  public getArray() {
    return new Float32Array([this.value]);
  }

  public setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation) {
    gl.uniform1i(uniLocation, this.value);
  }
}
