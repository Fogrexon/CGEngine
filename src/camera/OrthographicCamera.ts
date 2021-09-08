import { Matrix4 } from '../utils/Matrix';
import { Camera } from './Camera';

class OrthographicCamera extends Camera {

  private height: number;

  private aspect: number;

  private near: number;

  private far: number;

  viewMatrix: Matrix4 = new Matrix4();

  projectionMatrix: Matrix4 = new Matrix4();

  constructor(height: number, aspect: number, near: number, far: number) {
    super();
    this.height = height;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }

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

export { OrthographicCamera };
