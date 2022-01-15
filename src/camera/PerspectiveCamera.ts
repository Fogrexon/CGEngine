import { Camera } from './Camera';

/**
 * Perspective camera
 *
 * @export
 * @class PerspectiveCamera
 * @extends {Camera}
 */
export class PerspectiveCamera extends Camera {
  /**
   * View angle
   *
   * @type {number}
   * @memberof PerspectiveCamera
   */
  public angle: number;

  /**
   * view aspect ratio (width / height)
   *
   * @type {number}
   * @memberof PerspectiveCamera
   */
  public aspect: number;

  /**
   * near clip
   *
   * @type {number}
   * @memberof PerspectiveCamera
   */
  public near: number;

  /**
   * far clip
   *
   * @type {number}
   * @memberof PerspectiveCamera
   */
  public far: number;

  /**
   * Creates an instance of PerspectiveCamera.
   * @param {number} angle
   * @param {number} aspect
   * @param {number} near
   * @param {number} far
   * @memberof PerspectiveCamera
   */
  constructor(angle: number, aspect: number, near: number, far: number) {
    super();
    this.angle = angle;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }

  /**
   * update projection matrix (with current value)
   *
   * @memberof PerspectiveCamera
   */
  public updateProjectionMatrix(): void {
    const scaleX: number = 1 / Math.tan(this.angle / 2) / this.aspect;
    const scaleY: number = 1 / Math.tan(this.angle / 2);
    const scaleZ: number = (this.near + this.far) / (this.near - this.far);
    const transZ: number = (2 * this.near * this.far) / (this.near - this.far);

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
      scaleZ,
      -1,
      0,
      0,
      transZ,
      0,
    ]);
  }
}
