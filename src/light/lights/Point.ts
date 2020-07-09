/* eslint-disable no-param-reassign */
import { Light } from '../Light';
import { Vector3, Vector4 } from '../../utils/Vector';
import { Matrix4 } from '../../utils/Matrix';
import { LightsUniform } from '../Primitives';

import { Color } from '../../utils/Color';

class Point extends Light {
  color: Color;

  decay: number;

  constructor(_color: Color, _decay?: number) {
    super();
    this.color = _color;
    this.decay = _decay || 1;
  }

  searchLight(lightsList: LightsUniform):void {
    lightsList.uPointLight.push({
      pos: new Vector3(0, 0, 0),
      color: this.color,
      decay: this.decay,
    });
    lightsList.uPointNum += 1;
    super.searchLight(lightsList);
  }

  prepare(parentMat: Matrix4, lightsList: LightsUniform): void {
    this.thisMat = <Matrix4>parentMat.multiply(
      this.transform.getMatrix(),
    );

    lightsList.uPointLight.push({
      pos: new Vector3(
        this.thisMat.matrix[12],
        this.thisMat.matrix[13],
        this.thisMat.matrix[14],
      ),
      color: this.color,
      decay: this.decay,
    });
    lightsList.uPointNum += 1;
    this.children.map((child) => child.prepare(this.thisMat, lightsList));
  }
}

export { Point };
