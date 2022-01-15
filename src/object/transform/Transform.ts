import { Vector3 } from '../../utils/Vector';
import { Quartanion } from '../../utils/Quarternion';
import { Matrix4 } from '../../utils/Matrix';

/**
 * Entity's posture (position, rotation, scale)
 *
 * @export
 * @class Transform
 */
export class Transform {
  /**
   * Position
   *
   * @type {Vector3}
   * @memberof Transform
   */
  position: Vector3;

  /**
   * Position in previous frame
   *
   * @private
   * @type {Vector3}
   * @memberof Transform
   */
  private prevPos: Vector3;

  /**
   * Rotation (quaternion)
   *
   * @type {Quartanion}
   * @memberof Transform
   */
  rotation: Quartanion;

  /**
   * Rotation in previous frame
   *
   * @private
   * @type {Quartanion}
   * @memberof Transform
   */
  private prevRot: Quartanion;

  /**
   * Scale
   *
   * @type {Vector3}
   * @memberof Transform
   */
  scale: Vector3;

  /**
   * Scale in previous frame
   *
   * @private
   * @type {Vector3}
   * @memberof Transform
   */
  private prevSca: Vector3;

  /**
   * Model matrix
   *
   * @type {Matrix4}
   * @memberof Transform
   */
  private matrix: Matrix4;

  /**
   * Creates an instance of Transform.
   * @memberof Transform
   */
  constructor() {
    this.position = new Vector3(0, 0, 0);
    this.prevPos = new Vector3(0, 0, 0);
    this.rotation = new Quartanion();
    this.prevRot = new Quartanion();
    this.scale = new Vector3(1, 1, 1);
    this.prevSca = new Vector3(1, 1, 1);
    this.matrix = new Matrix4();
  }

  /**
   * Set rotation to look at target
   *
   * @param {Vector3} target target position
   * @return {*}  {Transform}
   * @memberof Transform
   */
  lookAt(target: Vector3): Transform {
    const z: Vector3 = this.position.subtract(target).normalize();
    const x: Vector3 = new Vector3(0, 1, 0).cross(z).normalize();
    const y: Vector3 = z.cross(x).normalize();

    const mat4: Matrix4 = new Matrix4([
      x.x,
      x.y,
      x.z,
      0,
      y.x,
      y.y,
      y.z,
      0,
      z.x,
      z.y,
      z.z,
      0,
      0,
      0,
      0,
      1,
    ]);

    this.rotation = this.rotation.fromMatrix(mat4);

    return this;
  }

  /**
   * Get if model matrix need to update
   *
   * @return {*}  {boolean}
   * @memberof Transform
   */
  needUpdate(): boolean {
    return !(
      this.position.equals(this.prevPos) &&
      this.rotation.equals(this.prevRot) &&
      this.scale.equals(this.prevSca)
    );
  }

  /**
   * Get model matrix
   *
   * @return {*}  {Matrix4}
   * @memberof Transform
   */
  getMatrix(): Matrix4 {
    if (!this.needUpdate()) return this.matrix;
    const p = new Matrix4([
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      this.position.x,
      this.position.y,
      this.position.z,
      1,
    ]);
    const s = new Matrix4([
      this.scale.x,
      0,
      0,
      0,
      0,
      this.scale.y,
      0,
      0,
      0,
      0,
      this.scale.z,
      0,
      0,
      0,
      0,
      1,
    ]);
    const r = this.rotation.matrix();

    this.matrix = <Matrix4>(<Matrix4>p.multiply(r)).multiply(s);
    this.prevPos = this.position.clone();
    this.prevRot = this.rotation.clone();
    this.prevSca = this.scale.clone();
    return this.matrix;
  }
}
