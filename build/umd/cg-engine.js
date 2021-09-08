(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CGEngine = {}));
}(this, (function (exports) { 'use strict';

    class Vector2 {
      constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
      }

      set(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }

      length2() {
        return this.x ** 2.0 + this.y ** 2.0;
      }

      length() {
        return Math.sqrt(this.length2());
      }

      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2);
      }

      add(a) {
        if (a instanceof Vector2) return new Vector2(this.x + a.x, this.y + a.y);
        return new Vector2(this.x + a, this.y + a);
      }

      subtract(a) {
        if (a instanceof Vector2) return new Vector2(this.x - a.x, this.y - a.y);
        return new Vector2(this.x - a, this.y - a);
      }

      multiply(a) {
        if (a instanceof Vector2) return new Vector2(this.x * a.x, this.y * a.y);
        return new Vector2(this.x * a, this.y * a);
      }

      divide(a) {
        if (a instanceof Vector2) {
          console.assert(!(a.x === 0 || a.y === 0), 'cannot divide by zero');
          return new Vector2(this.x / a.x, this.y / a.y);
        }

        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector2(this.x / a, this.y / a);
      }

      normalize() {
        return this.divide(this.length());
      }

      dot(a) {
        return this.x * a.x + this.y * a.y;
      }

      equal(a) {
        return this.x === a.x && this.y === a.y;
      }

      copy() {
        return new Vector2(this.x, this.y);
      }

      getArray() {
        return new Float32Array([this.x, this.y]);
      }

    }

    class Vector3 {
      constructor(_x, _y, _z) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
      }

      set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }

      length2() {
        return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0;
      }

      length() {
        return Math.sqrt(this.length2());
      }

      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2);
      }

      add(a) {
        if (a instanceof Vector3) return new Vector3(this.x + a.x, this.y + a.y, this.z + a.z);
        return new Vector3(this.x + a, this.y + a, this.z + a);
      }

      subtract(a) {
        if (a instanceof Vector3) return new Vector3(this.x - a.x, this.y - a.y, this.z - a.z);
        return new Vector3(this.x - a, this.y - a, this.z - a);
      }

      multiply(a) {
        if (a instanceof Vector3) return new Vector3(this.x * a.x, this.y * a.y, this.z * a.z);
        return new Vector3(this.x * a, this.y * a, this.z * a);
      }

      divide(a) {
        if (a instanceof Vector3) {
          console.assert(!(a.x === 0 || a.y === 0 || a.z === 0), 'cannot divide by zero');
          return new Vector3(this.x / a.x, this.y / a.y, this.z / a.z);
        }

        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector3(this.x / a, this.y / a, this.z / a);
      }

      normalize() {
        return this.divide(this.length());
      }

      dot(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z;
      }

      cross(a) {
        return new Vector3(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x);
      }

      equal(a) {
        return this.x === a.x && this.y === a.y && this.z === a.z;
      }

      copy() {
        return new Vector3(this.x, this.y, this.z);
      }

      getArray() {
        return new Float32Array([this.x, this.y, this.z]);
      }

    }

    class Vector4 {
      constructor(_x, _y, _z, _w) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
        this.w = _w;
      }

      set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
      }

      length2() {
        return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0 + this.w ** 2.0;
      }

      length() {
        return Math.sqrt(this.length2());
      }

      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2 + (this.w - a.w) ** 2);
      }

      add(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
        }

        return new Vector4(this.x + a, this.y + a, this.z + a, this.w + a);
      }

      subtract(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w);
        }

        return new Vector4(this.x - a, this.y - a, this.z - a, this.w - a);
      }

      multiply(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x * a.x, this.y * a.y, this.z * a.z, this.w * a.w);
        }

        return new Vector4(this.x * a, this.y * a, this.z * a, this.w * a);
      }

      divide(a) {
        if (a instanceof Vector4) {
          console.assert(!(a.x === 0 || a.y === 0 || a.z === 0 || a.w === 0), 'cannot divide by zero');
          return new Vector4(this.x / a.x, this.y / a.y, this.z / a.z, this.w / a.w);
        }

        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector4(this.x / a, this.y / a, this.z / a, this.w / a);
      }

      normalize() {
        return this.divide(this.length());
      }

      dot(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
      }

      equal(a) {
        return this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w;
      }

      copy() {
        return new Vector4(this.x, this.y, this.z, this.w);
      }

      getArray() {
        return new Float32Array([this.x, this.y, this.z, this.w]);
      }

    }

    class Matrix4 {
      constructor(numArray) {
        this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        if (numArray) this.set(numArray);
      } // 生成


      eye() {
        this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        return this;
      }

      set(numArray) {
        this.matrix = numArray;
        return this;
      }

      empty() {
        this.matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        return this;
      }

      fill(a) {
        this.matrix = [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a];
        return this;
      } // 計算


      add(add) {
        const m = this.matrix;

        if (add instanceof Matrix4) {
          const n = add.matrix;
          return new Matrix4([m[0] + n[0], m[1] + n[1], m[2] + n[2], m[3] + n[3], m[4] + n[4], m[5] + n[5], m[6] + n[6], m[7] + n[7], m[8] + n[8], m[9] + n[9], m[10] + n[10], m[11] + n[11], m[12] + n[12], m[13] + n[13], m[14] + n[14], m[15] + n[15]]);
        }

        return new Matrix4([m[0] + add, m[1] + add, m[2] + add, m[3] + add, m[4] + add, m[5] + add, m[6] + add, m[7] + add, m[8] + add, m[9] + add, m[10] + add, m[11] + add, m[12] + add, m[13] + add, m[14] + add, m[15] + add]);
      }

      subtract(sub) {
        const m = this.matrix;

        if (sub instanceof Matrix4) {
          const n = sub.matrix;
          return new Matrix4([m[0] - n[0], m[1] - n[1], m[2] - n[2], m[3] - n[3], m[4] - n[4], m[5] - n[5], m[6] - n[6], m[7] - n[7], m[8] - n[8], m[9] - n[9], m[10] - n[10], m[11] - n[11], m[12] - n[12], m[13] - n[13], m[14] - n[14], m[15] - n[15]]);
        }

        return new Matrix4([m[0] + sub, m[1] + sub, m[2] + sub, m[3] + sub, m[4] + sub, m[5] + sub, m[6] + sub, m[7] + sub, m[8] + sub, m[9] + sub, m[10] + sub, m[11] + sub, m[12] + sub, m[13] + sub, m[14] + sub, m[15] + sub]);
      }

      multiply(mul) {
        const m = this.matrix;

        if (mul instanceof Matrix4) {
          const n = mul.matrix;
          return new Matrix4([m[0] * n[0] + m[4] * n[1] + m[8] * n[2] + m[12] * n[3], m[1] * n[0] + m[5] * n[1] + m[9] * n[2] + m[13] * n[3], m[2] * n[0] + m[6] * n[1] + m[10] * n[2] + m[14] * n[3], m[3] * n[0] + m[7] * n[1] + m[11] * n[2] + m[15] * n[3], m[0] * n[4] + m[4] * n[5] + m[8] * n[6] + m[12] * n[7], m[1] * n[4] + m[5] * n[5] + m[9] * n[6] + m[13] * n[7], m[2] * n[4] + m[6] * n[5] + m[10] * n[6] + m[14] * n[7], m[3] * n[4] + m[7] * n[5] + m[11] * n[6] + m[15] * n[7], m[0] * n[8] + m[4] * n[9] + m[8] * n[10] + m[12] * n[11], m[1] * n[8] + m[5] * n[9] + m[9] * n[10] + m[13] * n[11], m[2] * n[8] + m[6] * n[9] + m[10] * n[10] + m[14] * n[11], m[3] * n[8] + m[7] * n[9] + m[11] * n[10] + m[15] * n[11], m[0] * n[12] + m[4] * n[13] + m[8] * n[14] + m[12] * n[15], m[1] * n[12] + m[5] * n[13] + m[9] * n[14] + m[13] * n[15], m[2] * n[12] + m[6] * n[13] + m[10] * n[14] + m[14] * n[15], m[3] * n[12] + m[7] * n[13] + m[11] * n[14] + m[15] * n[15]]);
        }

        if (mul instanceof Vector4) {
          return new Vector4(m[0] * mul.x + m[4] * mul.y + m[8] * mul.z + m[12] * mul.w, m[1] * mul.x + m[5] * mul.y + m[9] * mul.z + m[13] * mul.w, m[2] * mul.x + m[6] * mul.y + m[10] * mul.z + m[14] * mul.w, m[3] * mul.x + m[7] * mul.y + m[11] * mul.z + m[15] * mul.w);
        }

        return new Matrix4([m[0] * mul, m[1] * mul, m[2] * mul, m[3] * mul, m[4] * mul, m[5] * mul, m[6] * mul, m[7] * mul, m[8] * mul, m[9] * mul, m[10] * mul, m[11] * mul, m[12] * mul, m[13] * mul, m[14] * mul, m[15] * mul]);
      }

      transpose() {
        const m = this.matrix;
        return new Matrix4([m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]]);
      }

      inverse() {
        const mat = this.matrix;
        const a = mat[0];
        const b = mat[1];
        const c = mat[2];
        const d = mat[3];
        const e = mat[4];
        const f = mat[5];
        const g = mat[6];
        const h = mat[7];
        const i = mat[8];
        const j = mat[9];
        const k = mat[10];
        const l = mat[11];
        const m = mat[12];
        const n = mat[13];
        const o = mat[14];
        const p = mat[15];
        const q = a * f - b * e;
        const r = a * g - c * e;
        const s = a * h - d * e;
        const t = b * g - c * f;
        const u = b * h - d * f;
        const v = c * h - d * g;
        const w = i * n - j * m;
        const x = i * o - k * m;
        const y = i * p - l * m;
        const z = j * o - k * n;
        const A = j * p - l * n;
        const B = k * p - l * o;
        let ivd = q * B - r * A + s * z + t * y - u * x + v * w;
        if (ivd === 0) throw new Error('detA == 0');
        ivd = 1 / ivd;
        const dest = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        dest[0] = (f * B - g * A + h * z) * ivd;
        dest[1] = (-b * B + c * A - d * z) * ivd;
        dest[2] = (n * v - o * u + p * t) * ivd;
        dest[3] = (-j * v + k * u - l * t) * ivd;
        dest[4] = (-e * B + g * y - h * x) * ivd;
        dest[5] = (a * B - c * y + d * x) * ivd;
        dest[6] = (-m * v + o * s - p * r) * ivd;
        dest[7] = (i * v - k * s + l * r) * ivd;
        dest[8] = (e * A - f * y + h * w) * ivd;
        dest[9] = (-a * A + b * y - d * w) * ivd;
        dest[10] = (m * u - n * s + p * q) * ivd;
        dest[11] = (-i * u + j * s - l * q) * ivd;
        dest[12] = (-e * z + f * x - g * w) * ivd;
        dest[13] = (a * z - b * x + c * w) * ivd;
        dest[14] = (-m * t + n * r - o * q) * ivd;
        dest[15] = (i * t - j * r + k * q) * ivd;
        return new Matrix4(dest);
      }

      getArray() {
        return new Float32Array(this.matrix);
      }

      getScaleRotationMatrix() {
        const m = this.matrix;
        return new Matrix4([m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, 0, 0, 0, 1]);
      }

      getTranslateVector() {
        return new Vector3(this.matrix[12], this.matrix[13], this.matrix[14]);
      }

    }

    class Quartanion {
      constructor(v, w) {
        this.v = v || new Vector3(0, 0, 0);
        this.w = w || 1;
      } // 設定


      set(v, w) {
        this.v = v;
        this.w = w;
        return this;
      }

      angleAxis(angle, _axis) {
        const axis = _axis.normalize();

        this.v = new Vector3(axis.x * Math.sin(angle / 2), axis.y * Math.sin(angle / 2), axis.z * Math.sin(angle / 2));
        this.w = Math.cos(angle / 2);
        return this;
      }

      eularAngle(rot) {
        const {
          x,
          y,
          z
        } = rot;
        const xc = Math.cos(x);
        const xs = Math.sin(x);
        const yc = Math.cos(y);
        const ys = Math.sin(y);
        const zc = Math.cos(z);
        const zs = Math.sin(z);
        this.v = new Vector3(xc * yc * zc + xs * ys * zs, xs * yc * zc - xc * ys * zs, xc * ys * zc + xs * yc * zs);
        this.w = xc * yc * zs - xs * ys * zc;
        return this;
      }

      matrix() {
        const {
          x,
          y,
          z
        } = this.v;
        const {
          w
        } = this;
        return new Matrix4([x ** 2 - y ** 2 - z ** 2 + w ** 2, 2 * (x * y + z * w), 2 * (x * z - y * w), 0, 2 * (x * y - z * w), y ** 2 - x ** 2 - z ** 2 + w ** 2, 2 * (y * z + x * w), 0, 2 * (x * z + y * w), 2 * (y * z - x * w), z ** 2 + w ** 2 - x ** 2 - y ** 2, 0, 0, 0, 0, 1]);
      }

      fromMatrix(mat) {
        const m00 = mat.matrix[0];
        const m10 = mat.matrix[1];
        const m20 = mat.matrix[2];
        const m01 = mat.matrix[4];
        const m11 = mat.matrix[5];
        const m21 = mat.matrix[6];
        const m02 = mat.matrix[8];
        const m12 = mat.matrix[9];
        const m22 = mat.matrix[10];
        const element = [m00 - m11 - m22 + 1, -m00 + m11 - m22 + 1, -m00 - m11 + m22 + 1, m00 + m11 + m22 + 1];
        let maxIndex = 0;
        maxIndex = element[maxIndex] < element[1] ? 1 : maxIndex;
        maxIndex = element[maxIndex] < element[2] ? 2 : maxIndex;
        maxIndex = element[maxIndex] < element[3] ? 3 : maxIndex;

        if (element[maxIndex] < 0) {
          this.v = new Vector3(0, 0, 0);
          this.w = 1;
          console.error('Wrong matrix');
          return this;
        }

        const q = [0, 0, 0, 0];
        let v = Math.sqrt(element[maxIndex]) * 0.5 + 0.00001;
        q[maxIndex] = v;
        v = 0.25 / v;

        switch (maxIndex) {
          case 0:
            {
              q[1] = (m10 + m01) * v;
              q[2] = (m02 + m20) * v;
              q[3] = (m21 - m12) * v;
              break;
            }

          case 1:
            {
              q[0] = (m10 + m01) * v;
              q[2] = (m21 + m12) * v;
              q[3] = (m02 - m20) * v;
              break;
            }

          case 2:
            {
              q[0] = (m02 + m20) * v;
              q[1] = (m21 + m12) * v;
              q[3] = (m10 - m01) * v;
              break;
            }

          case 3:
            {
              q[0] = (m21 - m12) * v;
              q[1] = (m02 - m20) * v;
              q[2] = (m10 - m01) * v;
              break;
            }
        }

        return new Quartanion(new Vector3(q[0], q[1], q[2]), q[3]).normalize();
      }

      normalize() {
        const len = Math.sqrt(this.v.x ** 2 + this.v.y ** 2 + this.v.z ** 2 + this.w ** 2);
        return new Quartanion(new Vector3(this.v.x / len, this.v.y / len, this.v.z / len), this.w / len);
      } // 計算


      multiply(a) {
        if (a instanceof Quartanion) {
          return new Quartanion(this.v.cross(a.v).add(this.v.multiply(a.w)).add(a.v.multiply(this.w)), this.w * a.w - this.v.dot(a.v));
        }

        return this.matrix().multiply(a);
      }

      equal(a) {
        return this.v.equal(a.v) && this.w === a.w;
      }

      copy() {
        return new Quartanion(this.v.copy(), this.w);
      }

    }

    class Transform {
      constructor() {
        this.position = new Vector3(0, 0, 0);
        this.prevPos = new Vector3(0, 0, 0);
        this.rotation = new Quartanion();
        this.prevRot = new Quartanion();
        this.scale = new Vector3(1, 1, 1);
        this.prevSca = new Vector3(1, 1, 1);
        this.matrix = new Matrix4();
      }

      lookAt(target) {
        const z = this.position.subtract(target).normalize();
        const x = new Vector3(0, 1, 0).cross(z).normalize();
        const y = z.cross(x).normalize();
        const mat4 = new Matrix4([x.x, x.y, x.z, 0, y.x, y.y, y.z, 0, z.x, z.y, z.z, 0, 0, 0, 0, 1]);
        this.rotation = this.rotation.fromMatrix(mat4);
        return this;
      }

      needUpdate() {
        return !(this.position.equal(this.prevPos) && this.rotation.equal(this.prevRot) && this.scale.equal(this.prevSca));
      }

      getMatrix() {
        if (!this.needUpdate()) return this.matrix;
        const p = new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]);
        const s = new Matrix4([this.scale.x, 0, 0, 0, 0, this.scale.y, 0, 0, 0, 0, this.scale.z, 0, 0, 0, 0, 1]);
        const r = this.rotation.matrix();
        this.matrix = p.multiply(r).multiply(s);
        this.prevPos = this.position.copy();
        this.prevRot = this.rotation.copy();
        this.prevSca = this.scale.copy();
        return this.matrix;
      }

    }

    class Camera {
      constructor() {
        this.transform = new Transform();
        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
      }

      getMatrix() {
        this.viewMatrix = this.transform.needUpdate() ? this.transform.getMatrix().inverse() : this.viewMatrix;
        return {
          vMatrix: this.viewMatrix,
          pMatrix: this.projectionMatrix,
          uCameraPos: this.transform.position
        };
      }

    }

    class PerspectiveCamera extends Camera {
      constructor(angle, aspect, near, far) {
        super();
        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
        this.angle = angle;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
      }

      updateProjectionMatrix() {
        const scaleX = 1 / Math.tan(this.angle / 2) / this.aspect;
        const scaleY = 1 / Math.tan(this.angle / 2);
        const scaleZ = (this.near + this.far) / (this.near - this.far);
        const transZ = 2 * this.near * this.far / (this.near - this.far);
        this.projectionMatrix.set([scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, -1, 0, 0, transZ, 0]);
      }

    }

    class OrthographicCamera extends Camera {
      constructor(height, aspect, near, far) {
        super();
        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
        this.height = height;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
      }

      updateProjectionMatrix() {
        const scaleX = 2.0 / this.height / this.aspect;
        const scaleY = 2.0 / this.height;
        const scaleZ = 2.0 / (this.far - this.near);
        const transZ = (this.far + this.near) / (this.far - this.near);
        this.projectionMatrix.set([scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, -scaleZ, 0, 0, 0, -transZ, 1]);
      }

    }

    class Empty {
      constructor() {
        this.transform = new Transform();
        this.thisMat = new Matrix4();
        this.children = [];
      }

      searchLight(list) {
        this.children.map(child => child.searchLight(list));
      }

      initialize(gl, defaultUniforms) {
        this.children.map(child => child.initialize(gl, defaultUniforms));
      }

      prepare(parentMat, lightList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        this.children.map(child => child.prepare(this.thisMat, lightList));
      }

      render(gl, option) {
        this.children.map(child => child.render(gl, option));
      }

    }

    class Entity extends Empty {
      constructor(geometry, material) {
        super();
        this.program = null;
        this.geometry = geometry;
        this.material = material;
      }

      initialize(gl, defaultUniforms) {
        this.program = gl.createProgram();
        this.material.initialize(gl, this.program, defaultUniforms);
        this.geometry.setupAttribute(gl, this.program);
        super.initialize(gl, defaultUniforms);
      }

      render(gl, option) {
        this.material.uniform.mMatrix = this.thisMat;
        this.material.uniform.rMatrix = this.thisMat.getScaleRotationMatrix();
        this.material.uniform = { ...this.material.uniform,
          ...option.uniforms
        };
        gl.useProgram(this.program);
        this.material.setUniforms(gl);
        this.geometry.attachAttribute(gl);
        gl.drawElements(gl.TRIANGLES, this.geometry.getIndexLength(), gl.UNSIGNED_SHORT, 0);
        super.render(gl, option);
      }

    }

    class Light extends Empty {}

    class Color {
      constructor(_r, _g, _b, _a) {
        this.r = _r;
        this.g = _g;
        this.b = _b;
        this.a = _a || 1.0;
      }

      getArray() {
        return new Float32Array([this.r, this.g, this.b, this.a]);
      }

    }

    /* eslint-disable no-param-reassign */

    class Directional extends Light {
      constructor(color) {
        super();
        this.color = color;
      }

      searchLight(lightsList) {
        lightsList.uDirectionalLight.push({
          dir: new Vector3(0, 1, 0),
          color: new Color(1, 1, 1)
        });
        lightsList.uDirectionalNum = lightsList.uDirectionalNum + 1;
        super.searchLight(lightsList);
      }

      prepare(parentMat, lightsList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        const dir = this.thisMat.getScaleRotationMatrix().multiply(new Vector4(0, 0, -1, 0));
        lightsList.uDirectionalLight.push({
          dir: new Vector3(dir.x, dir.y, dir.z).normalize(),
          color: this.color
        });
        lightsList.uDirectionalNum = lightsList.uDirectionalNum + 1;
        this.children.map(child => child.prepare(this.thisMat, lightsList));
      }

    }

    /* eslint-disable no-param-reassign */

    class Point extends Light {
      constructor(_color, _distance, _decay) {
        super();
        this.color = _color;
        this.distance = _distance;
        this.decay = _decay || 1;
      }

      searchLight(lightsList) {
        lightsList.uPointLight.push({
          pos: new Vector3(0, 0, 0),
          color: this.color,
          distance: this.distance,
          decay: this.decay
        });
        lightsList.uPointNum = lightsList.uPointNum + 1;
        super.searchLight(lightsList);
      }

      prepare(parentMat, lightsList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        lightsList.uPointLight.push({
          pos: new Vector3(this.thisMat.matrix[12], this.thisMat.matrix[13], this.thisMat.matrix[14]),
          color: this.color,
          distance: this.distance,
          decay: this.decay
        });
        lightsList.uPointNum = lightsList.uPointNum + 1;
        this.children.map(child => child.prepare(this.thisMat, lightsList));
      }

    }

    /* eslint-disable no-param-reassign */

    class Spot extends Light {
      constructor(_color, _coneCos, _penumbraCos, _distance, _decay) {
        super();
        this.color = _color;
        this.decay = _decay || 1;
        this.coneCos = Math.cos(_coneCos);
        this.penumbraCos = Math.cos(_penumbraCos);
        this.distance = _distance;
      }

      searchLight(lightsList) {
        lightsList.uSpotLight.push({
          pos: new Vector3(0, 0, 0),
          dir: new Vector3(0, -1, 0),
          color: this.color,
          decay: this.decay,
          coneCos: this.coneCos,
          penumbraCos: this.penumbraCos,
          distance: this.distance
        });
        lightsList.uSpotNum = lightsList.uSpotNum + 1;
        super.searchLight(lightsList);
      }

      prepare(parentMat, lightsList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        const dir = this.thisMat.getScaleRotationMatrix().multiply(new Vector4(0, 0, -1, 0));
        lightsList.uSpotLight.push({
          pos: new Vector3(this.thisMat.matrix[12], this.thisMat.matrix[13], this.thisMat.matrix[14]),
          dir: new Vector3(dir.x, dir.y, dir.z),
          color: this.color,
          decay: this.decay,
          coneCos: this.coneCos,
          penumbraCos: this.penumbraCos,
          distance: this.distance
        });
        lightsList.uSpotNum = lightsList.uSpotNum + 1;
        this.children.map(child => child.prepare(this.thisMat, lightsList));
      }

    }

    /* eslint-disable no-param-reassign */

    class Ambient extends Light {
      constructor(color) {
        super();
        this.color = color;
      }

      searchLight(lightsList) {
        lightsList.uAmbientLight.push({
          color: new Color(1, 1, 1)
        });
        lightsList.uAmbientNum = lightsList.uAmbientNum + 1;
        super.searchLight(lightsList);
      }

      prepare(parentMat, lightsList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        lightsList.uAmbientLight.push({
          color: this.color
        });
        lightsList.uAmbientNum = lightsList.uAmbientNum + 1;
        this.children.map(child => child.prepare(this.thisMat, lightsList));
      }

    }

    const originalLightsUniform = JSON.stringify({
      uDirectionalLight: [],
      uDirectionalNum: 0,
      uPointLight: [],
      uPointNum: 0,
      uSpotLight: [],
      uSpotNum: 0,
      uAmbientLight: [],
      uAmbientNum: 0
    });

    var Primitives$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Directional: Directional,
        Point: Point,
        Spot: Spot,
        Ambient: Ambient,
        originalLightsUniform: originalLightsUniform
    });

    const createVBO = (gl, data) => {
      const vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return vbo;
    };

    const createIBO = (gl, index) => {
      const ibo = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(index), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      return ibo;
    };

    class Geometry {
      constructor(vertex, normal, uv, index, tangent, bitangent) {
        this.vertexLocation = -1;
        this.tangentLocation = -1;
        this.bitangentLocation = -1;
        this.normalLocation = -1;
        this.uvLocation = -1;
        this.vertexVBO = null;
        this.tangentVBO = null;
        this.bitangentVBO = null;
        this.normalVBO = null;
        this.uvVBO = null;
        this.indexIBO = null;
        this.vertex = vertex;
        this.normal = normal;
        this.uv = uv;
        this.index = index;
        this.tangent = tangent;
        this.bitangent = bitangent;
      } // Attribute情報の設定


      setupAttribute(gl, program) {
        this.vertexLocation = gl.getAttribLocation(program, 'vertex');
        this.normalLocation = gl.getAttribLocation(program, 'normal');
        this.uvLocation = gl.getAttribLocation(program, 'uv');
        this.vertexVBO = createVBO(gl, this.vertex);
        this.normalVBO = createVBO(gl, this.normal);
        this.uvVBO = createVBO(gl, this.uv);
        this.indexIBO = createIBO(gl, this.index);

        if (this.tangent && this.bitangent) {
          this.tangentLocation = gl.getAttribLocation(program, 'tangent');
          this.bitangentLocation = gl.getAttribLocation(program, 'bitangent');
          this.tangentVBO = createVBO(gl, this.tangent);
          this.bitangentVBO = createVBO(gl, this.bitangent);
        }
      }

      attachAttribute(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexVBO);
        gl.enableVertexAttribArray(this.vertexLocation);
        gl.vertexAttribPointer(this.vertexLocation, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalVBO);
        gl.enableVertexAttribArray(this.normalLocation);
        gl.vertexAttribPointer(this.normalLocation, 3, gl.FLOAT, true, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvVBO);
        gl.enableVertexAttribArray(this.uvLocation);
        gl.vertexAttribPointer(this.uvLocation, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexIBO);

        if (this.tangent && this.bitangent) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this.tangentVBO);
          gl.enableVertexAttribArray(this.tangentLocation);
          gl.vertexAttribPointer(this.tangentLocation, 3, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ARRAY_BUFFER, this.bitangentVBO);
          gl.enableVertexAttribArray(this.bitangentLocation);
          gl.vertexAttribPointer(this.bitangentLocation, 3, gl.FLOAT, false, 0, 0);
        }
      }

      getIndexLength() {
        return this.index.length;
      }

    }

    const Plane = () => {
      const vertex = [0.5, 0.0, -0.5, -0.5, 0.0, -0.5, -0.5, 0.0, 0.5, 0.5, 0.0, 0.5];
      const tangent = [0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0];
      const bitangent = [1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0];
      const normal = [0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0];
      const uv = [1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0];
      const index = [0, 1, 2, 0, 2, 3];
      return new Geometry(vertex, normal, uv, index, tangent, bitangent);
    };

    const Sphere = (_row, _column) => {
      const row = _row || 10;
      const column = _column || 10;
      const vertex = [];
      const tangent = [];
      const bitangent = [];
      const normal = [];
      const uv = [];
      const index = [];

      for (let theta = 0; theta < Math.PI + 0.001; theta += Math.PI / column) {
        for (let phi = 0; phi < Math.PI * 2 + 0.001; phi += Math.PI * 2 / row) {
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

    const Cube = () => {
      const vertex = [-0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5];
      const tangent = [0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0];
      const bitangent = [1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0];
      const normal = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0];
      const uv = [0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0];
      const index = [0, 1, 2, 2, 1, 3, 4, 5, 6, 6, 5, 7, 8, 9, 10, 10, 9, 11, 12, 13, 14, 14, 13, 15, 16, 17, 18, 18, 17, 19, 20, 21, 22, 22, 21, 23];
      return new Geometry(vertex, normal, uv, index, tangent, bitangent);
    };

    const Torus = (radius, _tubeSegment, _radialSegment) => {
      const tubeSegment = _tubeSegment || 10;
      const radialSegment = _radialSegment || 10;
      const vertex = [];
      const tangent = [];
      const bitangent = [];
      const normal = [];
      const uv = [];
      const index = [];

      for (let phi = 0; phi < Math.PI * 2 + 0.001; phi += Math.PI * 2 / radialSegment) {
        const r = 0.5 - Math.cos(phi) * radius;
        const y = Math.sin(phi) * radius;

        for (let theta = 0; theta < Math.PI * 2 + 0.001; theta += Math.PI * 2 / tubeSegment) {
          vertex.push(Math.cos(theta) * r);
          vertex.push(y);
          vertex.push(Math.sin(theta) * r);
          tangent.push(Math.sin(theta + Math.PI * 0.5));
          tangent.push(0);
          tangent.push(Math.cos(theta + Math.PI * 0.5));
          bitangent.push(-Math.sin(phi) * Math.cos(theta));
          bitangent.push(Math.cos(phi));
          bitangent.push(-Math.sin(phi) * Math.sin(theta));
          normal.push(-Math.cos(theta) * Math.cos(phi));
          normal.push(Math.sin(phi));
          normal.push(-Math.sin(theta) * Math.cos(phi));
          uv.push(phi / Math.PI / 2);
          uv.push(1 - theta / Math.PI / 2);
        }
      }

      for (let i = 0; i < radialSegment; i += 1) {
        for (let j = 0; j < tubeSegment; j += 1) {
          index.push(i * (tubeSegment + 1) + j);
          index.push((i + 1) * (tubeSegment + 1) + j + 1);
          index.push((i + 1) * (tubeSegment + 1) + j);
          index.push(i * (tubeSegment + 1) + j);
          index.push(i * (tubeSegment + 1) + j + 1);
          index.push((i + 1) * (tubeSegment + 1) + j + 1);
        }
      }

      return new Geometry(vertex, normal, uv, index, tangent, bitangent);
    };

    var Primitives$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Plane: Plane,
        Sphere: Sphere,
        Cube: Cube,
        Torus: Torus
    });

    class Integer {
      constructor(value) {
        this.value = value;
      }

    }

    const isUniformInstance = a => typeof a === 'number' || a instanceof Vector2 || a instanceof Vector3 || a instanceof Vector4 || a instanceof Color || a instanceof Matrix4 || a instanceof Integer;

    const UniformSwitcher = (gl, uniLocation, data) => {
      if (data instanceof Vector2) {
        gl.uniform2fv(uniLocation, data.getArray());
      } else if (data instanceof Vector3) {
        gl.uniform3fv(uniLocation, data.getArray());
      } else if (data instanceof Vector4) {
        gl.uniform4fv(uniLocation, data.getArray());
      } else if (data instanceof Color) {
        gl.uniform4fv(uniLocation, data.getArray());
      } else if (data instanceof Matrix4) {
        gl.uniformMatrix4fv(uniLocation, false, data.getArray());
      } else if (data instanceof Integer) {
        if (data.value instanceof Vector2) {
          gl.uniform2iv(uniLocation, data.value.getArray());
        } else if (data.value instanceof Vector3) {
          gl.uniform3iv(uniLocation, data.value.getArray());
        } else if (data.value instanceof Vector4) {
          gl.uniform4iv(uniLocation, data.value.getArray());
        } else if (typeof data.value === 'number') {
          gl.uniform1i(uniLocation, data.value);
        }
      } else if (typeof data === 'number') {
        gl.uniform1f(uniLocation, data);
      }
    };

    const compileShader = (gl, shader, source) => {
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(source);
        throw new Error(gl.getShaderInfoLog(shader));
      }
    };

    class Material {
      constructor(vertex, fragment, uniform) {
        this.vertexShader = null;
        this.fragmentShader = null;
        this.uniformLocations = {};
        this.vertexSource = vertex;
        this.fragmentSource = fragment;
        this.uniform = uniform;
      }

      initialize(gl, program, defaultUniform) {
        this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        compileShader(gl, this.vertexShader, this.vertexSource);
        compileShader(gl, this.fragmentShader, this.fragmentSource);
        gl.attachShader(program, this.vertexShader);
        gl.attachShader(program, this.fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(program));
        }

        this.uniform = { ...this.uniform,
          ...defaultUniform
        };
        Object.entries(this.uniform).map(value => {
          this.uniformLocations[value[0]] = gl.getUniformLocation(program, value[0]);
          return true;
        });
      }

      setUniforms(gl) {
        const entries = Object.entries(this.uniformLocations);
        entries.map(value => UniformSwitcher(gl, value[1], this.uniform[value[0]]));
      }

    }

    const BasicVertex = `
precision mediump float;
attribute vec3 vertex;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 tangent;
attribute vec3 bitangent;

uniform mat4 mMatrix;
uniform mat4 vMatrix;
uniform mat4 pMatrix;
uniform mat4 rMatrix;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vTangent;
varying vec3 vBitangent;

void main(void) {
  vWorldPos = (mMatrix * vec4(vertex, 1.0)).xyz;
  vTangent = normalize((rMatrix * vec4(tangent, 1.0)).xyz);
  vBitangent = normalize((rMatrix * vec4(bitangent, 1.0)).xyz);
  vNormal = normalize((rMatrix * vec4(normal, 1.0)).xyz);
  vUv = uv;
  gl_Position = pMatrix * vMatrix * vec4(vWorldPos, 1.0);
}
`;

    var vbasic = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BasicVertex: BasicVertex
    });

    const BasicFragment = `
precision mediump float;
uniform vec4 mainColor;

void main(void)
{
  gl_FragColor = mainColor;
}
`;

    var fbasic = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BasicFragment: BasicFragment
    });

    const PhongFragment = `
precision mediump float;

#define saturate(x) clamp(x,0.0,1.0)
#define LIGHT_MAX 10

struct DirectionalLight {
  vec3 dir;
  vec4 color;
};

struct PointLight {
  vec3 pos;
  vec4 color;
  float decay;
  float distance;
};

struct SpotLight {
  vec3 pos;
  vec3 dir;
  vec4 color;
  float coneCos;
  float penumbraCos;
  float distance;
  float decay;
};

struct AmbientLight {
  vec4 color;
};

uniform vec4 mainColor;

uniform vec3 uCameraPos;
uniform DirectionalLight uDirectionalLight[LIGHT_MAX];
uniform int uDirectionalNum;
uniform PointLight uPointLight[LIGHT_MAX];
uniform int uPointNum;
uniform SpotLight uSpotLight[LIGHT_MAX];
uniform int uSpotNum;
uniform AmbientLight uAmbientLight[LIGHT_MAX];
uniform int uAmbientNum;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec2 vUv;

void directionalLight(inout vec4 color, in vec3 eye, DirectionalLight light) {
  color += (saturate(dot(light.dir, vNormal)) + pow(saturate(dot(vNormal, normalize(light.dir - eye))), 50.0)) * light.color;
}

void pointLight(inout vec4 color, in vec3 eye, PointLight light) {
  float d = distance(vWorldPos, light.pos);
  if(light.distance < d) return;
  color += pow(saturate(1.0 - d / light.distance), light.decay) * saturate(dot(normalize(light.pos - vWorldPos), vNormal)) * light.color;
}

void spotLight(inout vec4 color, in vec3 eye, SpotLight light) {
  float d = distance(light.pos, vWorldPos);
  vec3 ldir = normalize(vWorldPos - light.pos);
  float c = dot(ldir, light.dir);
  if(d > light.distance || c < light.coneCos) return;
  float spot = smoothstep(light.coneCos, light.penumbraCos, c);
  float factor = pow(saturate(1.0 - d / light.distance), light.decay);

  color += light.color * spot * factor * saturate(dot(-ldir, vNormal));
}

void ambientLight(inout vec4 color, AmbientLight light) {
  color += light.color;
}

vec4 getLightColor(in vec3 eye) {
  vec4 color;
  for (int i=0;i<LIGHT_MAX;i++) {
    if (i >= uDirectionalNum) break;
    directionalLight(color, eye, uDirectionalLight[i]);
  }
  for (int i=0;i<LIGHT_MAX;i++) {
    if (i >= uPointNum) break;
    pointLight(color, eye, uPointLight[i]);
  }
  for (int i=0;i<LIGHT_MAX;i++) {
    if (i >= uSpotNum) break;
    spotLight(color, eye, uSpotLight[i]);
  }
  for (int i=0;i<LIGHT_MAX;i++) {
    if (i >= uAmbientNum) break;
    ambientLight(color, uAmbientLight[i]);
  }
  return color;
}

void main(void)
{

  vec3 viewDir = normalize(vWorldPos - uCameraPos);

  vec4 result = getLightColor(viewDir);
  result = saturate(result * mainColor);
  result.a = mainColor.a;
  gl_FragColor = result;
}
`;

    var phong = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PhongFragment: PhongFragment
    });

    const DiffuseBRDF = {
      Disney: `
float fresnel(in float u, in float f0, in float f90) {
  return f0 + (f90 - f0) * pow(1.0 - u, 5.0); 
}

vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + v);
  float Fd90 = 0.5 + 2.0 * pow(saturate(dot(l, h)), 2.0) * roughness;
  float FL = fresnel(1.0, Fd90, saturate(dot(n, l)));
  float FV = fresnel(1.0, Fd90, saturate(dot(n, v)));
  return material.diffuse * FL * FV / PI;
}
  `,
      NormalizedDisney: `
float fresnel(in float u, in float f0, in float f90) {
  return f0 + (f90 - f0) * pow(1.0 - u, 5.0); 
}

vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + v);
  float energyBias = mix(0.0, 0.5, roughness);
  float energyFactor = mix(1.0, 1.0 / 1.51, roughness);
  float Fd90 = energyBias + 2.0 * pow(saturate(dot(l, h)), 2.0) * roughness;
  float FL = fresnel(1.0, Fd90, saturate(dot(n, l)));
  float FV = fresnel(1.0, Fd90, saturate(dot(n, v)));
  return material.diffuse * FL * FV * energyFactor / PI;
}
  `,
      Lambert: `
vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
  return material.diffuse;
}
  `,
      NormalizedLambert: `
vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
  return material.diffuse / PI;
}
  `,
      OrenNayar: `
vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  float r2 = roughness * roughness;
  float dotnv = saturate(dot(n, v));
  float dotnl = saturate(dot(n, l));
  float a = 1.0 - 0.5 * r2 / (r2 + 0.33);
  float b = 0.45 * r2 / (r2 + 0.09);
  float cosPhi = dot(normalize(v - dotnv * n), normalize(l - dotnl * n));
  float sinnv = sqrt(1.0 - dotnv * dotnv);
  float sinnl = sqrt(1.0 - dotnl * dotnl);
  float s = dotnv < dotnl ? sinnv : sinnl;
  float t = dotnv > dotnl ? sinnv / dotnv : sinnl / dotnl;
  return material.diffuse * (a + b * cosPhi * s * t) / PI;
}
`,
      None: `
vec3 DiffuseBRDF(in NormalizedLight normalizedLight) {
return vec3(0.0);
}
`
    };
    const Distribution = {
      BlinnPhong: `
float D(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  float ap = a * 50.0;
  return (ap + 2.0) / (2.0 * PI) * pow(saturate(dot(n, h)), ap);
}
`,
      Beckmann: `
float D(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  float cosa2 = pow(dot(n, h), 2.0);
  return exp(-(1.0 - cosa2)/(cosa2 * pow(a, 2.0))) / (PI * a * a * cosa2 * cosa2 + EPSILON);
}
`,
      GGX: `
float D(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  float dotnh = saturate(dot(n, h));
  return (a*a)/(PI * pow(dotnh * dotnh * (a * a - 1.0) + 1.0, 2.0));
}
  `
    };
    const GeometricalAttenuation = {
      General: `
float G(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  float dotnh = saturate(dot(n,h));
  float dotnv = saturate(dot(n, v));
  float dotvh = saturate(dot(v, h));
  float dotnl = saturate(dot(n, l));
  return min(1.0, max(max(0.0, 2.0 * dotnh * dotnv / dotvh), 2.0 * dotnh * dotnl / dotvh));
}
`,
      SmithSchlickGGX: `
float G_Schlick(in vec3 n, in vec3 v, in float k) {
  return saturate(dot(n, v)) / (saturate(dot(n, v)) * (1.0 - k) + k);
}
  
float G(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  float k = a * a / 2.0 + EPSILON;
  return G_Schlick(n, l, k) * G_Schlick(n, v, k);
}
`,
      SmithJointGGX: `
float lambda(in float a, in vec3 n, in vec3 x) {
  return (-1.0 + sqrt(1.0 + (a * a) * (1.0 / pow(dot(x, n), 2.0)) - 1.0)) / 2.0;
}
float G(in float a, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  return 1.0 / (1.0 + lambda(a, n, l) + lambda(a, n, v));
}
  `
    };
    const Fresnel = {
      Schlick: `
vec3 F(in vec3 light, in vec3 n, in vec3 l, in vec3 v, in vec3 h) {
  return light + (1.0 - light) * pow(1.0 - saturate(dot(v, h)), 5.0);
}
`
    };
    const SpecularBRDF = {
      Four: `
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + v);
  float a = roughness * roughness;
  return (F(material.specular, n, l, v, h) * D(a, n, l, v, h) * G(a, n, l, v, h))/(4.0 * dot(n,l) * dot(n, v));
}
`,
      One: ` 
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
vec3 n = vNormal;
vec3 l = -normalizedLight.dir;
vec3 v = -viewDir;
vec3 h = normalize(l + v);
float a = roughness * roughness;
return (F(material.specular, n, l, v, h) * D(a, n, l, v, h) * G(a, n, l, v, h))/(dot(n,l) * dot(n, v));
}
`,
      Pi: `
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + v);
  float a = roughness * roughness;
  return (F(material.specular, n, l, v, h) * D(a, n, l, v, h) * G(a, n, l, v, h))/(PI * dot(n,l) * dot(n, v));
}
`,
      Ward: `
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + v);
  float ax = roughnessX * roughnessX;
  float ay = roughnessY * roughnessY;
  float c = - (pow(dot(h, vBitangent)/ax, 2.0) + pow(dot(h, vTangent)/ay, 2.0)) / pow(dot(h, n), 2.0);
  return material.specular * exp(c) / (sqrt(dot(l, n) * dot(v, n)) * 4.0 * PI * ax * ay + EPSILON);
}
`,
      KajiyaKay: `
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
  vec3 n = vNormal;
  vec3 l = -normalizedLight.dir;
  vec3 v = -viewDir;
  vec3 h = normalize(l + vTangent);
  float dotlt = dot(n, l);
  float dotlt2 = sqrt(1.0 - dotlt * dotlt);
  float dotvt = dot(v, vTangent);
  float dotvt2 = sqrt(1.0 - dotvt * dotvt);
  return pow(max(dotlt2 * dotvt2 - dotlt * dotvt, 0.0), 80.0) * material.specular;
}
`,
      None: `
vec3 SpecularBRDF(in NormalizedLight normalizedLight) {
  return vec3(0.0);
}
`
    };

    var Functions = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DiffuseBRDF: DiffuseBRDF,
        Distribution: Distribution,
        GeometricalAttenuation: GeometricalAttenuation,
        Fresnel: Fresnel,
        SpecularBRDF: SpecularBRDF
    });

    const Primitives = {
      Standard: DiffuseBRDF.NormalizedLambert + Distribution.GGX + GeometricalAttenuation.SmithSchlickGGX + Fresnel.Schlick + SpecularBRDF.Four,
      CookTorrance: DiffuseBRDF.NormalizedLambert + Distribution.Beckmann + GeometricalAttenuation.General + Fresnel.Schlick + SpecularBRDF.Pi
    };

    const PhysicalFragmentBase = {
      before: `
precision mediump float;

#define saturate(x) clamp(x,0.0,1.0)
#define PI 3.14159265
#define EPSILON 0.00001
#define LIGHT_MAX 10

struct DirectionalLight {
  vec3 dir;
  vec4 color;
};

struct PointLight {
  vec3 pos;
  vec4 color;
  float decay;
  float distance;
};

struct SpotLight {
  vec3 pos;
  vec3 dir;
  vec4 color;
  float coneCos;
  float penumbraCos;
  float distance;
  float decay;
};

struct AmbientLight {
  vec4 color;
};

struct NormalizedLight {
  vec3 dir;
  vec3 color;
};

// Rendererで追加されるやつ
uniform vec3 uCameraPos;
uniform DirectionalLight uDirectionalLight[LIGHT_MAX];
uniform int uDirectionalNum;
uniform PointLight uPointLight[LIGHT_MAX];
uniform int uPointNum;
uniform SpotLight uSpotLight[LIGHT_MAX];
uniform int uSpotNum;
uniform AmbientLight uAmbientLight[LIGHT_MAX];
uniform int uAmbientNum;

// vertexからの
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vTangent;
varying vec3 vBitangent;

// PBRパラメーター
uniform vec4 albedo;
uniform float roughness;
uniform float roughnessX;
uniform float roughnessY;
uniform float metallic;

// グローバル変数
struct Material {
  vec3 diffuse;
  vec3 specular;
};

Material material;

vec3 viewDir;

bool directionalLight(in DirectionalLight light, inout NormalizedLight normalizedLight) {
  normalizedLight.color = light.color.xyz * light.color.a;
  normalizedLight.dir = light.dir;
  return true;
}

bool pointLight(in PointLight light, inout NormalizedLight normalizedLight) {
  float d = distance(vWorldPos, light.pos);
  if(light.distance < d) return false;
  normalizedLight.color = pow(saturate(1.0 - d / light.distance), light.decay) * light.color.xyz * light.color.a;
  normalizedLight.dir = normalize(vWorldPos - light.pos);
  return true;
}

bool spotLight(in SpotLight light, inout NormalizedLight normalizedLight) {
  float d = distance(light.pos, vWorldPos);
  vec3 ldir = normalize(vWorldPos - light.pos);
  float c = dot(ldir, light.dir);
  if(d > light.distance || c < light.coneCos) return false;
  float spot = smoothstep(light.coneCos, light.penumbraCos, c);
  float factor = pow(saturate(1.0 - d / light.distance), light.decay);
  
  normalizedLight.color = light.color.xyz * light.color.a * spot * factor;
  normalizedLight.dir = normalize(vWorldPos - light.pos);
  return true;
}
`,
      after: `
void ReflectLight(inout vec3 result, in NormalizedLight normalizedLight) {
  vec3 diffuse = DiffuseBRDF(normalizedLight);
  vec3 specular = SpecularBRDF(normalizedLight);
  vec3 irradiance = saturate(dot(vNormal, -normalizedLight.dir)) * normalizedLight.color * PI;

  result += (diffuse + specular) * irradiance;
}

vec3 lightCalc() {
  vec3 result = vec3(0.0);
  NormalizedLight normalizedLight;
  normalizedLight.dir = vec3(1.0,0.0,0.0);
  normalizedLight.color = vec3(0.0,0.0,0.0);

  for(int i=0;i<LIGHT_MAX;i++) {
    if(i >= uDirectionalNum) break;
    directionalLight(uDirectionalLight[i], normalizedLight);
    ReflectLight(result, normalizedLight);
  }
  for(int i=0;i<LIGHT_MAX;i++) {
    if(i >= uPointNum) break;
    if(pointLight(uPointLight[i], normalizedLight)) ReflectLight(result, normalizedLight);
  }
  for(int i=0;i<LIGHT_MAX;i++) {
    if(i >= uSpotNum) break;
    if(spotLight(uSpotLight[i], normalizedLight)) ReflectLight(result, normalizedLight);
  }
  for(int i=0;i<LIGHT_MAX;i++) {
    if(i >= uAmbientNum) break;
    result += uAmbientLight[i].color.xyz * uAmbientLight[i].color.a;
  }
  return result;
}

void globalValueSet() {
  material.diffuse = mix(albedo.xyz, vec3(0.0), metallic);
  material.specular = mix(vec3(0.04), albedo.xyz, metallic);

  viewDir = normalize(vWorldPos - uCameraPos);
}

void main(void){
  globalValueSet();
  vec3 result = lightCalc();
  gl_FragColor = vec4(result, albedo.a);
}
  `
    };

    const PhysicalFragment = _brdf => {
      const brdf = _brdf || Primitives.Standard;
      return PhysicalFragmentBase.before + brdf + PhysicalFragmentBase.after;
    };

    var physical = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PhysicalFragment: PhysicalFragment
    });

    const ShaderPrimitives = { ...vbasic,
      ...fbasic,
      ...phong,
      ...physical
    };

    /* eslint-disable no-use-before-define */

    const ObjectName = (_base, original, list) => {
      const base = _base === '' ? _base : `${_base}.`;
      Object.entries(original).map(value => {
        if (isUniformInstance(value[1])) list[`${base}${value[0]}`] = value[1];else if (Array.isArray(value[1])) ArrayName(`${base}${value[0]}`, value[1], list);else if (typeof value[1] === 'object') ObjectName(`${base}${value[0]}`, value[1], list);
        return true;
      });
    };

    const ArrayName = (base, original, list) => {
      for (let i = 0; i < original.length; i += 1) {
        if (isUniformInstance(original[i])) list[`${base}[${i}]`] = original[i];else if (Array.isArray(original[i])) ArrayName(`${base}[${i}]`, original[i], list);else if (typeof original[i] === 'object') ObjectName(`${base}[${i}]`, original[i], list);
      }
    };

    const ObjectToGLStructure = original => {
      const list = {};
      if (Array.isArray(original)) ArrayName('', original, list);else if (typeof original === 'object') ObjectName('', original, list);
      return list;
    };

    class Renderer {
      constructor(_parameter) {
        this.entities = null;
        this.parameter = _parameter;
        this.canvas = this.parameter.canvas;
        this.gl = this.canvas.getContext('webgl');
        this.parameter.clearColor = this.parameter.clearColor || new Color(0.0, 0.0, 0.0, 1.0);
        this.parameter.clearDepth = this.parameter.clearDepth || 1.0;
      }

      addEntities(entity) {
        const lightsList = JSON.parse(originalLightsUniform);
        this.entities = entity;
        this.entities.searchLight(lightsList);
        const lightsUniform = ObjectToGLStructure(lightsList);
        const defaultUniform = {
          mMatrix: null,
          vMatrix: null,
          pMatrix: null,
          rMatrix: null,
          uCameraPos: null,
          ...lightsUniform
        };
        this.entities.initialize(this.gl, defaultUniform);
      }

      render(camera) {
        console.assert(!!this.entities, 'Entities are not initialized');
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.enable(this.gl.CULL_FACE);
        const clearColor = this.parameter.clearColor;
        this.gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
        this.gl.clearDepth(this.parameter.clearDepth);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
        if (!this.entities) return;
        const lightsList = JSON.parse(originalLightsUniform);
        this.entities.prepare(new Matrix4(), lightsList);
        lightsList.uDirectionalNum = new Integer(lightsList.uDirectionalNum);
        lightsList.uPointNum = new Integer(lightsList.uPointNum);
        lightsList.uSpotNum = new Integer(lightsList.uSpotNum);
        lightsList.uAmbientNum = new Integer(lightsList.uAmbientNum);
        const lightsUniform = ObjectToGLStructure(lightsList);
        const option = {
          uniforms: { ...lightsUniform,
            ...camera.getMatrix()
          }
        };
        this.entities.render(this.gl, option);
      }

    }

    exports.Camera = Camera;
    exports.Color = Color;
    exports.Empty = Empty;
    exports.Entity = Entity;
    exports.Geometry = Geometry;
    exports.GeometryPrimitives = Primitives$1;
    exports.Light = Light;
    exports.LightPrimitives = Primitives$2;
    exports.Material = Material;
    exports.Matrix4 = Matrix4;
    exports.ObjectToGLStructure = ObjectToGLStructure;
    exports.OrthographicCamera = OrthographicCamera;
    exports.PBRFunctions = Functions;
    exports.PBRPrimitives = Primitives;
    exports.PerspectiveCamera = PerspectiveCamera;
    exports.Quartanion = Quartanion;
    exports.Renderer = Renderer;
    exports.ShaderPrimitives = ShaderPrimitives;
    exports.Transform = Transform;
    exports.Vector2 = Vector2;
    exports.Vector3 = Vector3;
    exports.Vector4 = Vector4;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cg-engine.js.map
