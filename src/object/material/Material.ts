import { UniformSwitcher, UniformType } from '../../utils/UniformSwitcher';

const compileShader = (gl: WebGLRenderingContext, shader: WebGLShader, source: string): void => {
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // eslint-disable-next-line no-console
    console.error(source);
    throw new Error(<string>gl.getShaderInfoLog(shader));
  }
};

/**
 * Material settings
 *
 * @export
 * @interface MaterialUniforms
 */
export interface MaterialUniforms {
  [key: string]: UniformType;
}

/**
 * Material class
 *
 * @export
 * @class Material
 */
export class Material {
  /**
   * vertex shader's source string
   *
   * @private
   * @type {string}
   * @memberof Material
   */
  private vertexSource: string;

  /**
   * fragmet shader's source string
   *
   * @private
   * @type {string}
   * @memberof Material
   */
  private fragmentSource: string;

  /**
   * uniform map
   *
   * @type {MaterialUniforms}
   * @memberof Material
   */
  public uniforms: MaterialUniforms;

  /**
   * Vertex shader
   *
   * @private
   * @type {(WebGLShader | null)}
   * @memberof Material
   */
  private vertexShader: WebGLShader | null = null;

  /**
   * Fragment shader
   *
   * @private
   * @type {(WebGLShader | null)}
   * @memberof Material
   */
  private fragmentShader: WebGLShader | null = null;

  /**
   * uniform locations
   *
   * @private
   * @type {({ [s: string]: WebGLUniformLocation | null })}
   * @memberof Material
   */
  private uniformLocations: { [s: string]: WebGLUniformLocation | null } = {};

  /**
   * Creates an instance of Material.
   * @param {string} vertex
   * @param {string} fragment
   * @param {MaterialUniforms} [uniforms={}]
   * @memberof Material
   */
  constructor(vertex: string, fragment: string, uniforms: MaterialUniforms = {}) {
    this.vertexSource = vertex;
    this.fragmentSource = fragment;
    this.uniforms = uniforms;
  }

  /**
   * Create WebGL program and get uniform location
   *
   * @param {WebGLRenderingContext} gl
   * @param {WebGLProgram} program
   * @param {MaterialUniforms} [defaultUniform={}]
   * @memberof Material
   */
  initialize(
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    defaultUniform: MaterialUniforms = {}
  ) {
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
      this.uniformLocations[key] = <WebGLUniformLocation>gl.getUniformLocation(program, key);
      return true;
    });
  }

  /**
   * Pass uniform values to shader
   *
   * @param {WebGLRenderingContext} gl
   * @memberof Material
   */
  setUniforms(gl: WebGLRenderingContext): void {
    Object.entries(this.uniformLocations).forEach(([key, value]) =>
      value ? UniformSwitcher(gl, value, this.uniforms[key]) : null
    );
  }
}
