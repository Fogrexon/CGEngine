export abstract class UniformValue<T> {
  public abstract equals(a: T): boolean;

  public abstract clone(): T;

  public abstract getArray(): Float32Array;

  public abstract setUniform(gl: WebGLRenderingContext, uniLocation: WebGLUniformLocation): void;
}
