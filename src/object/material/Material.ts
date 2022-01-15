import { UniformSwitcher, UniformType } from '../../utils/UniformSwitcher';

const compileShader = (gl: WebGLRenderingContext, shader: WebGLShader, source: string): void => {
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(source);
    throw new Error(<string>gl.getShaderInfoLog(shader));
  }
};

export interface MaterialUniforms {
  [key: string]: UniformType;
}

export class Material {
  private vertexSource: string;

  private fragmentSource: string;

  public uniforms: MaterialUniforms;

  private vertexShader: WebGLShader | null = null;

  private fragmentShader: WebGLShader | null = null;

  private uniformLocations: { [s: string]: WebGLUniformLocation | null } = {};

  constructor(vertex: string, fragment: string, uniforms: MaterialUniforms = {}) {
    this.vertexSource = vertex;
    this.fragmentSource = fragment;
    this.uniforms = uniforms;
  }

  initialize(gl: WebGLRenderingContext, program: WebGLProgram, defaultUniform: MaterialUniforms = {}) {
    this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    compileShader(gl, <WebGLShader>this.vertexShader, this.vertexSource);
    compileShader(gl, <WebGLShader>this.fragmentShader, this.fragmentSource);

    gl.attachShader(program, <WebGLShader>this.vertexShader);
    gl.attachShader(program, <WebGLShader>this.fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(<string>gl.getProgramInfoLog(program));
    }

    this.uniforms = {
      ...this.uniforms,
      ...defaultUniform,
    };

    Object.keys(this.uniforms).map((key: string) => {
      this.uniformLocations[key] = <WebGLUniformLocation>(
        gl.getUniformLocation(program, key)
      );
      return true;
    });
  }

  setUniforms(gl: WebGLRenderingContext): void {
    Object
      .entries(this.uniformLocations)
      .forEach(([key, value]) => value ? UniformSwitcher(gl, value, this.uniforms[key]) : null);
  }
}