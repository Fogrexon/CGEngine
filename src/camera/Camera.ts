import { Matrix4 } from '../utils/Matrix';
import { Vector3 } from '../utils/Vector';
import { Transform } from '../object/transform/Transform';

abstract class Camera {
  public transform: Transform;

  protected viewMatrix: Matrix4;

  protected projectionMatrix: Matrix4;

  constructor() {
    this.transform = new Transform();
    this.viewMatrix = new Matrix4();
    this.projectionMatrix = new Matrix4();
  }

  public abstract updateProjectionMatrix(): void;

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

export { Camera };
