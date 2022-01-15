/* eslint-disable no-param-reassign */
import { Light } from '../Light';
import { Vector3 } from '../../utils/Vector';
import { Matrix4 } from '../../utils/Matrix';
import { LightsUniform } from '../Primitives';

import { Color } from '../../utils/Color';

/**
 * Point light
 *
 * @export
 * @class Point
 * @extends {Light}
 */
export class Point extends Light {
  /**
   * Light color
   *
   * @type {Color}
   * @memberof Point
   */
  color: Color;

  /**
   * Light decay rate
   *
   * @type {number}
   * @memberof Point
   */
  decay: number;

  /**
   * Light distance limit
   *
   * @type {number}
   * @memberof Point
   */
  distance: number;

  /**
   * Creates an instance of Point.
   * @param {Color} _color Light color
   * @param {number} _distance Light distance limit
   * @param {number} [_decay] Light decay rate
   * @memberof Point
   */
  constructor(_color: Color, _distance: number, _decay: number = 1) {
    super();
    this.color = _color;
    this.distance = _distance;
    this.decay = _decay;
  }

  /**
   * Add template light to list (for create uniform locations)
   *
   * @param {LightsUniform} lightsList
   * @memberof Point
   */
  searchLight(lightsList: LightsUniform): void {
    lightsList.uPointLight.push({
      pos: new Vector3(0, 0, 0),
      color: this.color,
      distance: this.distance,
      decay: this.decay,
    });
    lightsList.uPointNum = <number>lightsList.uPointNum + 1;
    super.searchLight(lightsList);
  }

  /**
   * Add light setting value (for pass uniform value to shader)
   *
   * @param {Matrix4} parentMat
   * @param {LightsUniform} lightsList
   * @memberof Point
   */
  prepare(parentMat: Matrix4, lightsList: LightsUniform): void {
    this.thisMat = <Matrix4>parentMat.multiply(this.transform.getMatrix());

    lightsList.uPointLight.push({
      pos: new Vector3(this.thisMat.matrix[12], this.thisMat.matrix[13], this.thisMat.matrix[14]),
      color: this.color,
      distance: this.distance,
      decay: this.decay,
    });
    lightsList.uPointNum = <number>lightsList.uPointNum + 1;
    this.children.map((child) => child.prepare(this.thisMat, lightsList));
  }
}
