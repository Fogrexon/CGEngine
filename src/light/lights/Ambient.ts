/* eslint-disable no-param-reassign */
import { Light } from '../Light';
import { Matrix4 } from '../../utils/Matrix';
import { LightsUniform } from '../Primitives';

import { Color } from '../../utils/Color';

/**
 * Ambient camera.
 *
 * @export
 * @class Ambient
 * @extends {Light}
 */
export class Ambient extends Light {
  /**
   * light color
   *
   * @type {Color}
   * @memberof Ambient
   */
  color: Color;

  /**
   * Creates an instance of Ambient.
   * @param {Color} color Light color
   * @memberof Ambient
   */
  constructor(color: Color) {
    super();
    this.color = color;
  }

  /**
   * Add template light to list (for create uniform locations)
   *
   * @param {LightsUniform} lightsList
   * @memberof Ambient
   */
  searchLight(lightsList: LightsUniform): void {
    lightsList.uAmbientLight.push({
      color: new Color(1, 1, 1),
    });
    lightsList.uAmbientNum = <number>lightsList.uAmbientNum + 1;
    super.searchLight(lightsList);
  }

  /**
   * Add light setting value (for pass uniform value to shader)
   *
   * @param {Matrix4} parentMat
   * @param {LightsUniform} lightsList
   * @memberof Ambient
   */
  prepare(parentMat: Matrix4, lightsList: LightsUniform): void {
    this.thisMat = <Matrix4>parentMat.multiply(this.transform.getMatrix());

    lightsList.uAmbientLight.push({
      color: this.color,
    });
    lightsList.uAmbientNum = <number>lightsList.uAmbientNum + 1;
    this.children.map((child) => child.prepare(this.thisMat, lightsList));
  }
}
