import { Matrix4 } from '../utils/Matrix';
import { Vector3 } from '../utils/Vector';
import { Transform } from '../object/transform/Transform';

/**
 * Scene camera
 *
 * @export
 * @abstract
 * @class Camera
 */
export abstract class Camera {
  /**
   * camera transform
   *
   * @type {Transform}
   * @memberof Camera
   */
  public transform: Transform;

  /**
   * view matrix of camera
   *
   * @protected
   * @type {Matrix4}
   * @memberof Camera
   */
  protected viewMatrix: Matrix4;

  /**
   * projection matrix of camera
   *
   * @protected
   * @type {Matrix4}
   * @memberof Camera
   */
  protected projectionMatrix: Matrix4;

  /**
   * Creates an instance of Camera.
   * @memberof Camera
   */
  constructor() {
    this.transform = new Transform();
    this.viewMatrix = new Matrix4();
    this.projectionMatrix = new Matrix4();
  }

  /**
   * Update projection matrix (with current value)
   *
   * @abstract
   * @memberof Camera
   */
  public abstract updateProjectionMatrix(): void;

  /**
   * get all MVP matrix
   *
   * @return {*}  {{ vMatrix: Matrix4; pMatrix: Matrix4; uCameraPos: Vector3 }}
   * @memberof Camera
   */
  public getMatrix(): { vMatrix: Matrix4; pMatrix: Matrix4; uCameraPos: Vector3 } {
    this.viewMatrix = this.transform.needUpdate()
      ? this.transform.getMatrix().inverse()
      : this.viewMatrix;
    return {
      vMatrix: this.viewMatrix,
      pMatrix: this.projectionMatrix,
      uCameraPos: this.transform.position,
    };
  }
}
