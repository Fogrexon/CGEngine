/* eslint-disable no-param-reassign */
import { Light } from '../Light';
import { Vector3, Vector4 } from '../../utils/Vector';
import { Matrix4 } from '../../utils/Matrix';
import { LightsUniform } from '../Primitives';

import { Color } from '../../utils/Color';

/**
 * Spot light
 *
 * @export
 * @class Spot
 * @extends {Light}
 */
export class Spot extends Light {
  /**
   * Light color
   *
   * @type {Color}
   * @memberof Spot
   */
  color: Color;

  /**
   * Light decay rate
   *
   * @type {number}
   * @memberof Spot
   */
  decay: number;

  /**
   * Light distance limit
   *
   * @type {number}
   * @memberof Spot
   */
  distance: number;

  /**
   * Light area cone angle (full intensity in this angle) (cosine value)
   *
   * @type {number}
   * @memberof Spot
   */
  coneCos: number;

  /**
   * Penumbra angle (light intensity decays to 0 toward this angle ) (cosine value)
   *
   * @type {number}
   * @memberof Spot
   */
  penumbraCos: number;

  /**
   * Creates an instance of Spot.
   * @param {Color} _color Light color
   * @param {number} _coneCos Light cone angle (cosine)
   * @param {number} _penumbraCos Light penumbra angle (cosine)
   * @param {number} _distance Light distance limit
   * @param {number} [_decay] Light decay rate
   * @memberof Spot
   */
  constructor(
    _color: Color,
    _coneCos: number,
    _penumbraCos: number,
    _distance: number,
    _decay: number = 1
  ) {
    super();
    this.color = _color;
    this.decay = _decay;
    this.coneCos = Math.cos(_coneCos);
    this.penumbraCos = Math.cos(_penumbraCos);
    this.distance = _distance;
  }

  /**
   * Add template light to list (for create uniform locations)
   *
   * @param {LightsUniform} lightsList
   * @memberof Spot
   */
  searchLight(lightsList: LightsUniform): void {
    lightsList.uSpotLight.push({
      pos: new Vector3(0, 0, 0),
      dir: new Vector3(0, -1, 0),
      color: this.color,
      decay: this.decay,
      coneCos: this.coneCos,
      penumbraCos: this.penumbraCos,
      distance: this.distance,
    });
    lightsList.uSpotNum = <number>lightsList.uSpotNum + 1;
    super.searchLight(lightsList);
  }

  /**
   * Add light setting value (for pass uniform value to shader)
   *
   * @param {Matrix4} parentMat
   * @param {LightsUniform} lightsList
   * @memberof Spot
   */
  prepare(parentMat: Matrix4, lightsList: LightsUniform): void {
    this.thisMat = <Matrix4>parentMat.multiply(this.transform.getMatrix());

    const dir: Vector4 = <Vector4>(
      this.thisMat.getScaleRotationMatrix().multiply(new Vector4(0, 0, -1, 0))
    );
    lightsList.uSpotLight.push({
      pos: new Vector3(this.thisMat.matrix[12], this.thisMat.matrix[13], this.thisMat.matrix[14]),
      dir: new Vector3(dir.x, dir.y, dir.z),
      color: this.color,
      decay: this.decay,
      coneCos: this.coneCos,
      penumbraCos: this.penumbraCos,
      distance: this.distance,
    });
    lightsList.uSpotNum = <number>lightsList.uSpotNum + 1;
    this.children.map((child) => child.prepare(this.thisMat, lightsList));
  }
}
