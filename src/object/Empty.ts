import { Transform } from './transform/Transform';
import { Matrix4 } from '../utils/Matrix';
import { LightsUniform } from '../light/Primitives';
import { UniformType } from '../utils/UniformSwitcher';
import { RenderOptions } from '../renderer/Renderer';

/**
 * Empty object (parent of some entities)
 *
 * @export
 * @class Empty
 */
export class Empty {
  /**
   * transform
   *
   * @type {Transform}
   * @memberof Empty
   */
  transform: Transform = new Transform();

  /**
   * World coordinate based model matrix
   *
   * @protected
   * @type {Matrix4}
   * @memberof Empty
   */
  protected thisMat: Matrix4 = new Matrix4();

  /**
   * Children entities
   *
   * @type {Empty[]}
   * @memberof Empty
   */
  children: Empty[];

  /**
   * Creates an instance of Empty.
   * @memberof Empty
   */
  constructor() {
    this.children = [];
  }

  /**
   * Pass light list
   *
   * @param {LightsUniform} list
   * @memberof Empty
   */
  searchLight(list: LightsUniform): void {
    this.children.map((child) => child.searchLight(list));
  }

  /**
   * initialize children
   *
   * @param {WebGLRenderingContext} gl
   * @param {{ [key: string]: UniformType }} defaultUniforms
   * @memberof Empty
   */
  initialize(gl: WebGLRenderingContext, defaultUniforms: { [key: string]: UniformType }): void {
    this.children.map((child) => child.initialize(gl, defaultUniforms));
  }

  /**
   * prepare children
   *
   * @param {Matrix4} parentMat
   * @param {LightsUniform} lightList
   * @memberof Empty
   */
  prepare(parentMat: Matrix4, lightList: LightsUniform): void {
    this.thisMat = <Matrix4>parentMat.multiply(this.transform.getMatrix());
    this.children.map((child) => child.prepare(this.thisMat, lightList));
  }

  /**
   * render children
   *
   * @param {WebGLRenderingContext} gl
   * @param {RenderOptions} options
   * @memberof Empty
   */
  render(gl: WebGLRenderingContext, options: RenderOptions): void {
    this.children.map((child) => child.render(gl, options));
  }
}
