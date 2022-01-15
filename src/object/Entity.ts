import { Empty } from './Empty';
import { Geometry } from './geometry/Geometry';
import { Material } from './material/Material';
import { UniformType } from '../utils/UniformSwitcher';
import { RenderOptions } from '../renderer/Renderer';

/**
 * Object with geometry
 *
 * @export
 * @class Entity
 * @extends {Empty}
 */
export class Entity extends Empty {
  /**
   * Geometry
   *
   * @type {Geometry}
   * @memberof Entity
   */
  geometry: Geometry;

  /**
   * Material
   *
   * @type {Material}
   * @memberof Entity
   */
  material: Material;

  /**
   * WebGLProgram
   *
   * @type {(WebGLProgram | null)}
   * @memberof Entity
   */
  private program: WebGLProgram | null = null;

  /**
   * Creates an instance of Entity.
   * @param {Geometry} geometry
   * @param {Material} material
   * @memberof Entity
   */
  constructor(geometry: Geometry, material: Material) {
    super();
    this.geometry = geometry;
    this.material = material;
  }

  /**
   * Initialize geometry and material
   *
   * @param {WebGLRenderingContext} gl
   * @param {{ [key: string]: UniformType }} defaultUniforms
   * @memberof Entity
   */
  initialize(gl: WebGLRenderingContext, defaultUniforms: { [key: string]: UniformType }): void {
    this.program = <WebGLProgram>gl.createProgram();
    (<Material>this.material).initialize(gl, this.program, defaultUniforms);
    (<Geometry>this.geometry).setupAttribute(gl, this.program);
    super.initialize(gl, defaultUniforms);
  }

  /**
   * Render entity
   *
   * @param {WebGLRenderingContext} gl
   * @param {RenderOptions} options
   * @memberof Entity
   */
  render(gl: WebGLRenderingContext, options: RenderOptions): void {
    this.material.uniforms.mMatrix = this.thisMat;
    this.material.uniforms.rMatrix = this.thisMat.getScaleRotationMatrix();
    this.material.uniforms = {
      ...this.material.uniforms,
      ...options.uniforms,
    };

    gl.useProgram(this.program);
    this.material.setUniforms(gl);
    this.geometry.attachAttribute(gl);

    gl.drawElements(gl.TRIANGLES, this.geometry.getIndexLength(), gl.UNSIGNED_SHORT, 0);

    super.render(gl, options);
  }
}
