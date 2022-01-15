import { Vector2, Vector3, Vector4 } from './Vector';
import { Matrix4 } from './Matrix';
import { Color } from './Color';
import { Integer } from './Integer';
import { UniformValue } from './UniformValue';

export type UniformType = null | number | UniformValue<any>;

export const isValidValue = (a: any) =>
  typeof a === 'number' ||
  a instanceof Vector2 ||
  a instanceof Vector3 ||
  a instanceof Vector4 ||
  a instanceof Color ||
  a instanceof Matrix4 ||
  a instanceof Integer;

export const UniformSwitcher = (
  gl: WebGLRenderingContext,
  uniLocation: WebGLUniformLocation,
  value: UniformType
) => {
  if (!isValidValue(value)) return;
  if (typeof value === 'number') gl.uniform1f(uniLocation, value);
  else (value as UniformValue<any>).setUniform(gl, uniLocation);
};
