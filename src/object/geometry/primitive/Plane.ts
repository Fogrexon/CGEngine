import { Geometry } from '../Geometry';

export /**
 * Create plane geometry
 *
 * @return {*}  {Geometry}
 */
const Plane = (): Geometry => {
  const vertex: number[] = [0.5, 0.0, -0.5, -0.5, 0.0, -0.5, -0.5, 0.0, 0.5, 0.5, 0.0, 0.5];
  const tangent: number[] = [0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0];
  const bitangent: number[] = [1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0];
  const normal: number[] = [0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0];
  const uv: number[] = [1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0];
  const index: number[] = [0, 1, 2, 0, 2, 3];

  return new Geometry(vertex, normal, uv, index, tangent, bitangent);
};
