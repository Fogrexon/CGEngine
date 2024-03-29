import { Geometry } from '../Geometry';

export /**
 * Create sphere geometry
 *
 * @param {number} [_row]
 * @param {number} [_column]
 * @return {*}  {Geometry}
 */
const Sphere = (_row?: number, _column?: number): Geometry => {
  const row: number = _row || 10;
  const column: number = _column || 10;
  const vertex: number[] = [];
  const tangent: number[] = [];
  const bitangent: number[] = [];
  const normal: number[] = [];
  const uv: number[] = [];
  const index: number[] = [];
  for (let theta: number = 0; theta < Math.PI + 0.001; theta += Math.PI / column) {
    for (let phi: number = 0; phi < Math.PI * 2 + 0.001; phi += (Math.PI * 2) / row) {
      vertex.push(0.5 * Math.sin(theta) * Math.sin(phi));
      vertex.push(0.5 * Math.cos(theta));
      vertex.push(0.5 * Math.sin(theta) * Math.cos(phi));
      tangent.push(-Math.cos(theta) * Math.sin(phi));
      tangent.push(Math.sin(theta));
      tangent.push(-Math.cos(theta) * Math.cos(phi));
      bitangent.push(Math.cos(theta) * Math.sin(phi - Math.PI * 0.5));
      bitangent.push(Math.sin(theta));
      bitangent.push(Math.cos(theta) * Math.cos(phi - Math.PI * 0.5));
      normal.push(Math.sin(theta) * Math.sin(phi));
      normal.push(Math.cos(theta));
      normal.push(Math.sin(theta) * Math.cos(phi));
      uv.push(phi / (Math.PI * 2));
      uv.push(1 - theta / Math.PI);
    }
  }

  for (let i = 0; i < column; i += 1) {
    for (let j = 0; j < row; j += 1) {
      index.push(i * (row + 1) + j);
      index.push((i + 1) * (row + 1) + j);
      index.push(i * (row + 1) + j + 1);
      index.push(i * (row + 1) + j + 1);
      index.push((i + 1) * (row + 1) + j);
      index.push((i + 1) * (row + 1) + j + 1);
    }
  }

  return new Geometry(vertex, normal, uv, index, tangent, bitangent);
};
