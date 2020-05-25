class Vector4 {
  public x: number;

  public y: number;

  public z: number;

  public w: number;

  constructor(_x: number, _y: number, _z: number, _w: number) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.w = _w;
  }

  public length2(): number {
    return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0 + this.w ** 2.0;
  }

  public length(): number {
    return Math.sqrt(this.length2());
  }

  public static distance(a: Vector4, b: Vector4): number {
    return new Vector4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w).length();
  }

  public add(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
    }
    return new Vector4(this.x + a, this.y + a, this.z + a, this.w + a);
  }

  public subtract(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w);
    }
    return new Vector4(this.x - a, this.y - a, this.z - a, this.w - a);
  }

  public multiply(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x * a.x, this.y * a.y, this.z * a.z, this.w * a.w);
    }
    return new Vector4(this.x * a, this.y * a, this.z * a, this.w * a);
  }

  public divide(a: Vector4 | number): Vector4 {
    if (a instanceof Vector4) {
      return new Vector4(this.x / a.x, this.y / a.y, this.z / a.z, this.w / a.w);
    }
    return new Vector4(this.x / a, this.y / a, this.z / a, this.w / a);
  }

  public getArray(): Float32Array {
    return new Float32Array([this.x, this.y, this.z, this.w]);
  }
}

export { Vector4 };
