import { Camera } from './Camera';

/**
 * Orthographic camera
 *
 * @export
 * @class OrthographicCamera
 * @extends {Camera}
 */
export class OrthographicCamera extends Camera {
  /**
   * area height
   *
   * @private
   * @type {number}
   * @memberof OrthographicCamera
   */
  private height: number;

  /**
   * area aspect ratio (width / height)
   *
   * @private
   * @type {number}
   * @memberof OrthographicCamera
   */
  private aspect: number;

  /**
   * near clip
   *
   * @private
   * @type {number}
   * @memberof OrthographicCamera
   */
  private near: number;

  /**
   * far clip
   *
   * @private
   * @type {number}
   * @memberof OrthographicCamera
   */
  private far: number;

  /**
   * Creates an instance of OrthographicCamera.
   * @param {number} height
   * @param {number} aspect
   * @param {number} near
   * @param {number} far
   * @memberof OrthographicCamera
   */
  constructor(height: number, aspect: number, near: number, far: number) {
    super();
    this.height = height;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }

  /**
   * Update projection matrix (with current value)
   *
   * @memberof OrthographicCamera
   */
  updateProjectionMatrix(): void {
    const scaleX: number = 2.0 / this.height / this.aspect;
    const scaleY: number = 2.0 / this.height;
    const scaleZ: number = 2.0 / (this.far - this.near);
    const transZ: number = (this.far + this.near) / (this.far - this.near);

    this.projectionMatrix.set([
      scaleX,
      0,
      0,
      0,
      0,
      scaleY,
      0,
      0,
      0,
      0,
      -scaleZ,
      0,
      0,
      0,
      -transZ,
      1,
    ]);
  }
}
