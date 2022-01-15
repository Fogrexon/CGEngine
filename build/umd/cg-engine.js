(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CGEngine = {}));
}(this, (function (exports) { 'use strict';

    /**
     * Passable to shader as uniform value
     *
     * @export
     * @abstract
     * @class UniformValue
     * @template T
     */
    class UniformValue {}

    /**
     * Vector2
     *
     * @export
     * @class Vector2
     * @extends {UniformValue<Vector2>}
     */

    class Vector2 extends UniformValue {
      /**
       * first value
       *
       * @type {number}
       * @memberof Vector2
       */
      x;
      /**
       * second value
       *
       * @type {number}
       * @memberof Vector2
       */

      y;
      /**
       * Creates an instance of Vector2.
       * @param {number} [_x=0]
       * @param {number} _y
       * @memberof Vector2
       */

      constructor(_x = 0, _y) {
        super();
        this.x = _x;
        this.y = _y || _x;
      }
      /**
       * set value
       *
       * @param {number} x
       * @param {number} y
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      set(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
      /**
       * Squared length
       *
       * @return {*}  {number}
       * @memberof Vector2
       */


      length2() {
        return this.x ** 2.0 + this.y ** 2.0;
      }
      /**
       * Length
       *
       * @return {*}  {number}
       * @memberof Vector2
       */


      length() {
        return Math.sqrt(this.length2());
      }
      /**
       * Distance between two vectors
       *
       * @param {Vector2} a
       * @return {*}  {number}
       * @memberof Vector2
       */


      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2);
      }
      /**
       * Add vector2 or number
       *
       * @param {(Vector2 | number)} a
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      add(a) {
        if (a instanceof Vector2) return new Vector2(this.x + a.x, this.y + a.y);
        return new Vector2(this.x + a, this.y + a);
      }
      /**
       * Subtract vector2 or number
       *
       * @param {(Vector2 | number)} a
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      subtract(a) {
        if (a instanceof Vector2) return new Vector2(this.x - a.x, this.y - a.y);
        return new Vector2(this.x - a, this.y - a);
      }
      /**
       * Multiply vector2 or number
       *
       * @param {(Vector2 | number)} a
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      multiply(a) {
        if (a instanceof Vector2) return new Vector2(this.x * a.x, this.y * a.y);
        return new Vector2(this.x * a, this.y * a);
      }
      /**
       * Divide with vector2 or number (if zero value, show error to console)
       *
       * @param {(Vector2 | number)} a
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      divide(a) {
        if (a instanceof Vector2) {
          // eslint-disable-next-line no-console
          console.assert(!(a.x === 0 || a.y === 0), 'cannot divide by zero');
          return new Vector2(this.x / a.x, this.y / a.y);
        } // eslint-disable-next-line no-console


        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector2(this.x / a, this.y / a);
      }
      /**
       * Normalized vector
       *
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      normalize() {
        return this.divide(this.length());
      }
      /**
       * Inner product
       *
       * @param {Vector2} a
       * @return {*}  {number}
       * @memberof Vector2
       */


      dot(a) {
        return this.x * a.x + this.y * a.y;
      }
      /**
       * Is equal
       *
       * @param {Vector2} a
       * @return {*}  {boolean}
       * @memberof Vector2
       */


      equals(a) {
        return this.x === a.x && this.y === a.y;
      }
      /**
       * Clone vector
       *
       * @return {*}  {Vector2}
       * @memberof Vector2
       */


      clone() {
        return new Vector2(this.x, this.y);
      }
      /**
       * Get Float32Array
       *
       * @return {*}  {Float32Array}
       * @memberof Vector2
       */


      getArray() {
        return new Float32Array([this.x, this.y]);
      }
      /**
       * Set value to shader
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Vector2
       */


      setUniform(gl, uniLocation) {
        gl.uniform2fv(uniLocation, this.getArray());
      }

    }

    /**
     * Vector3
     *
     * @export
     * @class Vector3
     * @extends {UniformValue<Vector3>}
     */

    class Vector3 extends UniformValue {
      /**
       * first value
       *
       * @type {number}
       * @memberof Vector3
       */
      x;
      /**
       * second value
       *
       * @type {number}
       * @memberof Vector3
       */

      y;
      /**
       * third value
       *
       * @type {number}
       * @memberof Vector3
       */

      z;
      /**
       * Creates an instance of Vector3.
       * @param {number} _x
       * @param {number} _y
       * @param {number} _z
       * @memberof Vector3
       */

      constructor(_x, _y, _z) {
        super();
        this.x = _x;
        this.y = _y;
        this.z = _z;
      }
      /**
       * Set values
       *
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }
      /**
       * Squared length
       *
       * @return {*}  {number}
       * @memberof Vector3
       */


      length2() {
        return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0;
      }
      /**
       * Length
       *
       * @return {*}  {number}
       * @memberof Vector3
       */


      length() {
        return Math.sqrt(this.length2());
      }
      /**
       * Distance between two vectors
       *
       * @param {Vector3} a
       * @return {*}  {number}
       * @memberof Vector3
       */


      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2);
      }
      /**
       * Add vecotr3 or number
       *
       * @param {(Vector3 | number)} a
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      add(a) {
        if (a instanceof Vector3) return new Vector3(this.x + a.x, this.y + a.y, this.z + a.z);
        return new Vector3(this.x + a, this.y + a, this.z + a);
      }
      /**
       * Subtract vector3 or number
       *
       * @param {(Vector3 | number)} a
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      subtract(a) {
        if (a instanceof Vector3) return new Vector3(this.x - a.x, this.y - a.y, this.z - a.z);
        return new Vector3(this.x - a, this.y - a, this.z - a);
      }
      /**
       * Multiply vector3 or number
       *
       * @param {(Vector3 | number)} a
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      multiply(a) {
        if (a instanceof Vector3) return new Vector3(this.x * a.x, this.y * a.y, this.z * a.z);
        return new Vector3(this.x * a, this.y * a, this.z * a);
      }
      /**
       * Divide with vector3 or number (if zero value, show erro in console)
       *
       * @param {(Vector3 | number)} a
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      divide(a) {
        if (a instanceof Vector3) {
          // eslint-disable-next-line no-console
          console.assert(!(a.x === 0 || a.y === 0 || a.z === 0), 'cannot divide by zero');
          return new Vector3(this.x / a.x, this.y / a.y, this.z / a.z);
        } // eslint-disable-next-line no-console


        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector3(this.x / a, this.y / a, this.z / a);
      }
      /**
       * Get normalized vector
       *
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      normalize() {
        return this.divide(this.length());
      }
      /**
       * Inner product
       *
       * @param {Vector3} a
       * @return {*}  {number}
       * @memberof Vector3
       */


      dot(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z;
      }
      /**
       * Outer product
       *
       * @param {Vector3} a
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      cross(a) {
        return new Vector3(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x);
      }
      /**
       * Is equal
       *
       * @param {Vector3} a
       * @return {*}  {boolean}
       * @memberof Vector3
       */


      equals(a) {
        return this.x === a.x && this.y === a.y && this.z === a.z;
      }
      /**
       * Clone vector
       *
       * @return {*}  {Vector3}
       * @memberof Vector3
       */


      clone() {
        return new Vector3(this.x, this.y, this.z);
      }
      /**
       * Get Float32Array
       *
       * @return {*}  {Float32Array}
       * @memberof Vector3
       */


      getArray() {
        return new Float32Array([this.x, this.y, this.z]);
      }
      /**
       * Set values to shader
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Vector3
       */


      setUniform(gl, uniLocation) {
        gl.uniform3fv(uniLocation, this.getArray());
      }

    }

    /**
     * Vector4
     *
     * @export
     * @class Vector4
     * @extends {UniformValue<Vector4>}
     */

    class Vector4 extends UniformValue {
      /**
       * first value
       *
       * @type {number}
       * @memberof Vector4
       */
      x;
      /**
       * second value
       *
       * @type {number}
       * @memberof Vector4
       */

      y;
      /**
       * third value
       *
       * @type {number}
       * @memberof Vector4
       */

      z;
      /**
       * fourth value
       *
       * @type {number}
       * @memberof Vector4
       */

      w;
      /**
       * Creates an instance of Vector4.
       * @param {number} _x
       * @param {number} _y
       * @param {number} _z
       * @param {number} _w
       * @memberof Vector4
       */

      constructor(_x, _y, _z, _w) {
        super();
        this.x = _x;
        this.y = _y;
        this.z = _z;
        this.w = _w;
      }
      /**
       * Set values
       *
       * @param {number} x
       * @param {number} y
       * @param {number} z
       * @param {number} w
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
      }
      /**
       * Squared length
       *
       * @return {*}  {number}
       * @memberof Vector4
       */


      length2() {
        return this.x ** 2.0 + this.y ** 2.0 + this.z ** 2.0 + this.w ** 2.0;
      }
      /**
       * Length
       *
       * @return {*}  {number}
       * @memberof Vector4
       */


      length() {
        return Math.sqrt(this.length2());
      }
      /**
       * Distance between two vectors
       *
       * @param {Vector4} a
       * @return {*}  {number}
       * @memberof Vector4
       */


      distance(a) {
        return Math.sqrt((this.x - a.x) ** 2 + (this.y - a.y) ** 2 + (this.z - a.z) ** 2 + (this.w - a.w) ** 2);
      }
      /**
       * Add vector4 or number
       *
       * @param {(Vector4 | number)} a
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      add(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
        }

        return new Vector4(this.x + a, this.y + a, this.z + a, this.w + a);
      }
      /**
       * Subtract vector4 or number
       *
       * @param {(Vector4 | number)} a
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      subtract(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w);
        }

        return new Vector4(this.x - a, this.y - a, this.z - a, this.w - a);
      }
      /**
       * Multiply vector4 or number
       *
       * @param {(Vector4 | number)} a
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      multiply(a) {
        if (a instanceof Vector4) {
          return new Vector4(this.x * a.x, this.y * a.y, this.z * a.z, this.w * a.w);
        }

        return new Vector4(this.x * a, this.y * a, this.z * a, this.w * a);
      }
      /**
       * Divide vector4 or number (if zero value, show error in console)
       *
       * @param {(Vector4 | number)} a
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      divide(a) {
        if (a instanceof Vector4) {
          // eslint-disable-next-line no-console
          console.assert(!(a.x === 0 || a.y === 0 || a.z === 0 || a.w === 0), 'cannot divide by zero');
          return new Vector4(this.x / a.x, this.y / a.y, this.z / a.z, this.w / a.w);
        } // eslint-disable-next-line no-console


        console.assert(a !== 0, 'cannot divide by zero');
        return new Vector4(this.x / a, this.y / a, this.z / a, this.w / a);
      }
      /**
       * Normalized vector
       *
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      normalize() {
        return this.divide(this.length());
      }
      /**
       * Inner product
       *
       * @param {Vector4} a
       * @return {*}  {number}
       * @memberof Vector4
       */


      dot(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
      }
      /**
       * Is equal
       *
       * @param {Vector4} a
       * @return {*}  {boolean}
       * @memberof Vector4
       */


      equals(a) {
        return this.x === a.x && this.y === a.y && this.z === a.z && this.w === a.w;
      }
      /**
       * Clone vector
       *
       * @return {*}  {Vector4}
       * @memberof Vector4
       */


      clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
      }
      /**
       * Get Float32Array
       *
       * @return {*}  {Float32Array}
       * @memberof Vector4
       */


      getArray() {
        return new Float32Array([this.x, this.y, this.z, this.w]);
      }
      /**
       * Set values to shader
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Vector4
       */


      setUniform(gl, uniLocation) {
        gl.uniform4fv(uniLocation, this.getArray());
      }

    }

    /**
     * Matrix 4x4
     *
     * @export
     * @class Matrix4
     * @extends {UniformValue<Matrix4>}
     */

    class Matrix4 extends UniformValue {
      /**
       * Matrix elements
       *
       * @type {number[]}
       * @memberof Matrix4
       */
      matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      /**
       * Creates an instance of Matrix4.
       * @param {number[]} [numArray] default matrix elements
       * @memberof Matrix4
       */

      constructor(numArray) {
        super();
        if (numArray) this.set(numArray);
      }
      /**
       * Identity matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      eye() {
        this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        return this;
      }
      /**
       * Set matrix elements
       *
       * @param {number[]} numArray
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      set(numArray) {
        if (numArray.length !== 16) {
          // eslint-disable-next-line no-console
          console.error('Number of elements is invalid.');
          return this;
        }

        this.matrix = numArray;
        return this;
      }
      /**
       * Empty matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      empty() {
        this.matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        return this;
      }
      /**
       * Create matrix filled with a
       *
       * @param {number} a filling number
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      fill(a) {
        this.matrix = [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a];
        return this;
      }
      /**
       * Add matrix or number to this
       *
       * @param {(Matrix4 | number)} add
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      add(add) {
        const m = this.matrix;

        if (add instanceof Matrix4) {
          const n = add.matrix;
          return new Matrix4([m[0] + n[0], m[1] + n[1], m[2] + n[2], m[3] + n[3], m[4] + n[4], m[5] + n[5], m[6] + n[6], m[7] + n[7], m[8] + n[8], m[9] + n[9], m[10] + n[10], m[11] + n[11], m[12] + n[12], m[13] + n[13], m[14] + n[14], m[15] + n[15]]);
        }

        return new Matrix4([m[0] + add, m[1] + add, m[2] + add, m[3] + add, m[4] + add, m[5] + add, m[6] + add, m[7] + add, m[8] + add, m[9] + add, m[10] + add, m[11] + add, m[12] + add, m[13] + add, m[14] + add, m[15] + add]);
      }
      /**
       * Substact matrix or number
       *
       * @param {(Matrix4 | number)} sub
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      subtract(sub) {
        const m = this.matrix;

        if (sub instanceof Matrix4) {
          const n = sub.matrix;
          return new Matrix4([m[0] - n[0], m[1] - n[1], m[2] - n[2], m[3] - n[3], m[4] - n[4], m[5] - n[5], m[6] - n[6], m[7] - n[7], m[8] - n[8], m[9] - n[9], m[10] - n[10], m[11] - n[11], m[12] - n[12], m[13] - n[13], m[14] - n[14], m[15] - n[15]]);
        }

        return new Matrix4([m[0] + sub, m[1] + sub, m[2] + sub, m[3] + sub, m[4] + sub, m[5] + sub, m[6] + sub, m[7] + sub, m[8] + sub, m[9] + sub, m[10] + sub, m[11] + sub, m[12] + sub, m[13] + sub, m[14] + sub, m[15] + sub]);
      }
      /**
       * Multiply number or Matrix or Vector4
       *
       * @param {(number | Matrix4 | Vector4)} mul
       * @return {*}  {(Matrix4 | Vector4)}
       * @memberof Matrix4
       */


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
      /**
       * Transpose matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      transpose() {
        const m = this.matrix;
        return new Matrix4([m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]]);
      }
      /**
       * Inverse matrix (if not invertible, throw error)
       *
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


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
      /**
       * Get scale and rotation matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Matrix4
       */


      getScaleRotationMatrix() {
        const m = this.matrix;
        return new Matrix4([m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, 0, 0, 0, 1]);
      }
      /**
       * Get translate matrix
       *
       * @return {*}  {Vector3}
       * @memberof Matrix4
       */


      getTranslateVector() {
        return new Vector3(this.matrix[12], this.matrix[13], this.matrix[14]);
      } // override

      /**
       * Is equal
       *
       * @param {Matrix4} a
       * @return {*}
       * @memberof Matrix4
       */


      equals(a) {
        return this.matrix.reduce((prev, curr, index) => prev && curr === a.matrix[index], true);
      }
      /**
       * Clone
       *
       * @return {*}
       * @memberof Matrix4
       */


      clone() {
        const m = this.matrix;
        return new Matrix4([m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]]);
      }
      /**
       * Get Float32Array (to pass shader)
       *
       * @return {*}  {Float32Array}
       * @memberof Matrix4
       */


      getArray() {
        return new Float32Array(this.matrix);
      }
      /**
       * Pass value to shader
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Matrix4
       */


      setUniform(gl, uniLocation) {
        gl.uniformMatrix4fv(uniLocation, false, this.getArray());
      }

    }

    /**
     * Quaternion
     *
     * @export
     * @class Quartanion
     */

    class Quartanion {
      /**
       * first three elements
       *
       * @type {Vector3}
       * @memberof Quartanion
       */
      v;
      /**
       * w value
       *
       * @type {number}
       * @memberof Quartanion
       */

      w;
      /**
       * Creates an instance of Quartanion.
       * @param {Vector3} [v]
       * @param {number} [w]
       * @memberof Quartanion
       */

      constructor(v, w) {
        this.v = v || new Vector3(0, 0, 0);
        this.w = w || 1;
      } // 設定


      set(v, w) {
        this.v = v;
        this.w = w;
        return this;
      }
      /**
       * Set quaternion with axis and angle
       *
       * @param {number} angle
       * @param {Vector3} _axis
       * @return {*}  {Quartanion}
       * @memberof Quartanion
       */


      angleAxis(angle, _axis) {
        this.v = _axis.normalize().multiply(Math.sin(angle / 2));
        this.w = Math.cos(angle / 2);
        return this;
      }
      /**
       * Set quaternion with eular angles
       *
       * @param {Vector3} rot
       * @return {*}  {Quartanion}
       * @memberof Quartanion
       */


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
      /**
       * Convert quaternion to rotation matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Quartanion
       */


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
      /**
       * Convert rotation matrix to quaternion
       *
       * @param {Matrix4} mat
       * @return {*}  {Quartanion}
       * @memberof Quartanion
       */


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
          this.w = 1; // eslint-disable-next-line no-console

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
      /**
       * Normalize quaternion
       *
       * @return {*}  {Quartanion}
       * @memberof Quartanion
       */


      normalize() {
        const len = Math.sqrt(this.v.x ** 2 + this.v.y ** 2 + this.v.z ** 2 + this.w ** 2);
        return new Quartanion(new Vector3(this.v.x / len, this.v.y / len, this.v.z / len), this.w / len);
      }
      /**
       * Multiply quaternion
       *
       * @param {(Quartanion | Vector4)} a
       * @return {*}  {(Quartanion | Vector4)}
       * @memberof Quartanion
       */


      multiply(a) {
        if (a instanceof Quartanion) {
          return new Quartanion(this.v.cross(a.v).add(this.v.multiply(a.w)).add(a.v.multiply(this.w)), this.w * a.w - this.v.dot(a.v));
        }

        return this.matrix().multiply(a);
      }
      /**
       * Is equal
       *
       * @param {Quartanion} a
       * @return {*}  {boolean}
       * @memberof Quartanion
       */


      equals(a) {
        return this.v.equals(a.v) && this.w === a.w;
      }
      /**
       * Clone quaternion
       *
       * @return {*}  {Quartanion}
       * @memberof Quartanion
       */


      clone() {
        return new Quartanion(this.v.clone(), this.w);
      }

    }

    /**
     * Entity's posture (position, rotation, scale)
     *
     * @export
     * @class Transform
     */

    class Transform {
      /**
       * Position
       *
       * @type {Vector3}
       * @memberof Transform
       */
      position;
      /**
       * Position in previous frame
       *
       * @private
       * @type {Vector3}
       * @memberof Transform
       */

      prevPos;
      /**
       * Rotation (quaternion)
       *
       * @type {Quartanion}
       * @memberof Transform
       */

      rotation;
      /**
       * Rotation in previous frame
       *
       * @private
       * @type {Quartanion}
       * @memberof Transform
       */

      prevRot;
      /**
       * Scale
       *
       * @type {Vector3}
       * @memberof Transform
       */

      scale;
      /**
       * Scale in previous frame
       *
       * @private
       * @type {Vector3}
       * @memberof Transform
       */

      prevSca;
      /**
       * Model matrix
       *
       * @type {Matrix4}
       * @memberof Transform
       */

      matrix;
      /**
       * Creates an instance of Transform.
       * @memberof Transform
       */

      constructor() {
        this.position = new Vector3(0, 0, 0);
        this.prevPos = new Vector3(0, 0, 0);
        this.rotation = new Quartanion();
        this.prevRot = new Quartanion();
        this.scale = new Vector3(1, 1, 1);
        this.prevSca = new Vector3(1, 1, 1);
        this.matrix = new Matrix4();
      }
      /**
       * Set rotation to look at target
       *
       * @param {Vector3} target target position
       * @return {*}  {Transform}
       * @memberof Transform
       */


      lookAt(target) {
        const z = this.position.subtract(target).normalize();
        const x = new Vector3(0, 1, 0).cross(z).normalize();
        const y = z.cross(x).normalize();
        const mat4 = new Matrix4([x.x, x.y, x.z, 0, y.x, y.y, y.z, 0, z.x, z.y, z.z, 0, 0, 0, 0, 1]);
        this.rotation = this.rotation.fromMatrix(mat4);
        return this;
      }
      /**
       * Get if model matrix need to update
       *
       * @return {*}  {boolean}
       * @memberof Transform
       */


      needUpdate() {
        return !(this.position.equals(this.prevPos) && this.rotation.equals(this.prevRot) && this.scale.equals(this.prevSca));
      }
      /**
       * Get model matrix
       *
       * @return {*}  {Matrix4}
       * @memberof Transform
       */


      getMatrix() {
        if (!this.needUpdate()) return this.matrix;
        const p = new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]);
        const s = new Matrix4([this.scale.x, 0, 0, 0, 0, this.scale.y, 0, 0, 0, 0, this.scale.z, 0, 0, 0, 0, 1]);
        const r = this.rotation.matrix();
        this.matrix = p.multiply(r).multiply(s);
        this.prevPos = this.position.clone();
        this.prevRot = this.rotation.clone();
        this.prevSca = this.scale.clone();
        return this.matrix;
      }

    }

    /**
     * Scene camera
     *
     * @export
     * @abstract
     * @class Camera
     */

    class Camera {
      /**
       * camera transform
       *
       * @type {Transform}
       * @memberof Camera
       */
      transform;
      /**
       * view matrix of camera
       *
       * @protected
       * @type {Matrix4}
       * @memberof Camera
       */

      viewMatrix;
      /**
       * projection matrix of camera
       *
       * @protected
       * @type {Matrix4}
       * @memberof Camera
       */

      projectionMatrix;
      /**
       * Creates an instance of Camera.
       * @memberof Camera
       */

      constructor() {
        this.transform = new Transform();
        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();
      }
      /**
       * get all MVP matrix
       *
       * @return {*}  {{ vMatrix: Matrix4; pMatrix: Matrix4; uCameraPos: Vector3 }}
       * @memberof Camera
       */


      getMatrix() {
        this.viewMatrix = this.transform.needUpdate() ? this.transform.getMatrix().inverse() : this.viewMatrix;
        return {
          vMatrix: this.viewMatrix,
          pMatrix: this.projectionMatrix,
          uCameraPos: this.transform.position
        };
      }

    }

    /**
     * Perspective camera
     *
     * @export
     * @class PerspectiveCamera
     * @extends {Camera}
     */

    class PerspectiveCamera extends Camera {
      /**
       * View angle
       *
       * @type {number}
       * @memberof PerspectiveCamera
       */
      angle;
      /**
       * view aspect ratio (width / height)
       *
       * @type {number}
       * @memberof PerspectiveCamera
       */

      aspect;
      /**
       * near clip
       *
       * @type {number}
       * @memberof PerspectiveCamera
       */

      near;
      /**
       * far clip
       *
       * @type {number}
       * @memberof PerspectiveCamera
       */

      far;
      /**
       * Creates an instance of PerspectiveCamera.
       * @param {number} angle
       * @param {number} aspect
       * @param {number} near
       * @param {number} far
       * @memberof PerspectiveCamera
       */

      constructor(angle, aspect, near, far) {
        super();
        this.angle = angle;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
      }
      /**
       * update projection matrix (with current value)
       *
       * @memberof PerspectiveCamera
       */


      updateProjectionMatrix() {
        const scaleX = 1 / Math.tan(this.angle / 2) / this.aspect;
        const scaleY = 1 / Math.tan(this.angle / 2);
        const scaleZ = (this.near + this.far) / (this.near - this.far);
        const transZ = 2 * this.near * this.far / (this.near - this.far);
        this.projectionMatrix.set([scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, -1, 0, 0, transZ, 0]);
      }

    }

    /**
     * Orthographic camera
     *
     * @export
     * @class OrthographicCamera
     * @extends {Camera}
     */

    class OrthographicCamera extends Camera {
      /**
       * area height
       *
       * @private
       * @type {number}
       * @memberof OrthographicCamera
       */
      height;
      /**
       * area aspect ratio (width / height)
       *
       * @private
       * @type {number}
       * @memberof OrthographicCamera
       */

      aspect;
      /**
       * near clip
       *
       * @private
       * @type {number}
       * @memberof OrthographicCamera
       */

      near;
      /**
       * far clip
       *
       * @private
       * @type {number}
       * @memberof OrthographicCamera
       */

      far;
      /**
       * Creates an instance of OrthographicCamera.
       * @param {number} height
       * @param {number} aspect
       * @param {number} near
       * @param {number} far
       * @memberof OrthographicCamera
       */

      constructor(height, aspect, near, far) {
        super();
        this.height = height;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
      }
      /**
       * Update projection matrix (with current value)
       *
       * @memberof OrthographicCamera
       */


      updateProjectionMatrix() {
        const scaleX = 2.0 / this.height / this.aspect;
        const scaleY = 2.0 / this.height;
        const scaleZ = 2.0 / (this.far - this.near);
        const transZ = (this.far + this.near) / (this.far - this.near);
        this.projectionMatrix.set([scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, -scaleZ, 0, 0, 0, -transZ, 1]);
      }

    }

    /**
     * Empty object (parent of some entities)
     *
     * @export
     * @class Empty
     */

    class Empty {
      /**
       * transform
       *
       * @type {Transform}
       * @memberof Empty
       */
      transform = new Transform();
      /**
       * World coordinate based model matrix
       *
       * @protected
       * @type {Matrix4}
       * @memberof Empty
       */

      thisMat = new Matrix4();
      /**
       * Children entities
       *
       * @type {Empty[]}
       * @memberof Empty
       */

      children;
      /**
       * Creates an instance of Empty.
       * @memberof Empty
       */

      constructor() {
        this.children = [];
      }
      /**
       * Pass light list
       *
       * @param {LightsUniform} list
       * @memberof Empty
       */


      searchLight(list) {
        this.children.map(child => child.searchLight(list));
      }
      /**
       * initialize children
       *
       * @param {WebGLRenderingContext} gl
       * @param {{ [key: string]: UniformType }} defaultUniforms
       * @memberof Empty
       */


      initialize(gl, defaultUniforms) {
        this.children.map(child => child.initialize(gl, defaultUniforms));
      }
      /**
       * prepare children
       *
       * @param {Matrix4} parentMat
       * @param {LightsUniform} lightList
       * @memberof Empty
       */


      prepare(parentMat, lightList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        this.children.map(child => child.prepare(this.thisMat, lightList));
      }
      /**
       * render children
       *
       * @param {WebGLRenderingContext} gl
       * @param {RenderOptions} options
       * @memberof Empty
       */


      render(gl, options) {
        this.children.map(child => child.render(gl, options));
      }

    }

    /**
     * Object with geometry
     *
     * @export
     * @class Entity
     * @extends {Empty}
     */

    class Entity extends Empty {
      /**
       * Geometry
       *
       * @type {Geometry}
       * @memberof Entity
       */
      geometry;
      /**
       * Material
       *
       * @type {Material}
       * @memberof Entity
       */

      material;
      /**
       * WebGLProgram
       *
       * @type {(WebGLProgram | null)}
       * @memberof Entity
       */

      program = null;
      /**
       * Creates an instance of Entity.
       * @param {Geometry} geometry
       * @param {Material} material
       * @memberof Entity
       */

      constructor(geometry, material) {
        super();
        this.geometry = geometry;
        this.material = material;
      }
      /**
       * Initialize geometry and material
       *
       * @param {WebGLRenderingContext} gl
       * @param {{ [key: string]: UniformType }} defaultUniforms
       * @memberof Entity
       */


      initialize(gl, defaultUniforms) {
        this.program = gl.createProgram();
        this.material.initialize(gl, this.program, defaultUniforms);
        this.geometry.setupAttribute(gl, this.program);
        super.initialize(gl, defaultUniforms);
      }
      /**
       * Render entity
       *
       * @param {WebGLRenderingContext} gl
       * @param {RenderOptions} options
       * @memberof Entity
       */


      render(gl, options) {
        this.material.uniforms.mMatrix = this.thisMat;
        this.material.uniforms.rMatrix = this.thisMat.getScaleRotationMatrix();
        this.material.uniforms = { ...this.material.uniforms,
          ...options.uniforms
        };
        gl.useProgram(this.program);
        this.material.setUniforms(gl);
        this.geometry.attachAttribute(gl);
        gl.drawElements(gl.TRIANGLES, this.geometry.getIndexLength(), gl.UNSIGNED_SHORT, 0);
        super.render(gl, options);
      }

    }

    /**
     * Parent class of lights
     *
     * @export
     * @class Light
     * @extends {Empty}
     */

    class Light extends Empty {}

    /**
     * Color
     *
     * @export
     * @class Color
     * @extends {UniformValue<Color>}
     */

    class Color extends UniformValue {
      /**
       * red value (0 ~ 1)
       *
       * @type {number}
       * @memberof Color
       */
      r;
      /**
       * green value (0 ~ 1)
       *
       * @type {number}
       * @memberof Color
       */

      g;
      /**
       * blue value (0 ~ 1)
       *
       * @type {number}
       * @memberof Color
       */

      b;
      /**
       * alpha value (0 ~ 1)
       *
       * @type {number}
       * @memberof Color
       */

      a;
      /**
       * Creates an instance of Color.
       * @param {number} _r
       * @param {number} _g
       * @param {number} _b
       * @param {number} [_a=1.0]
       * @memberof Color
       */

      constructor(_r, _g, _b, _a = 1.0) {
        super();
        this.r = _r;
        this.g = _g;
        this.b = _b;
        this.a = _a;
      }
      /**
       * Is equal
       *
       * @param {Color} a
       * @return {*}
       * @memberof Color
       */


      equals(a) {
        return this.r === a.r && this.g === a.g && this.b === a.b && this.a === a.a;
      }
      /**
       * Clone color
       *
       * @return {*}
       * @memberof Color
       */


      clone() {
        return new Color(this.r, this.g, this.b, this.a);
      }
      /**
       * Get Float32Array
       *
       * @return {*}  {Float32Array}
       * @memberof Color
       */


      getArray() {
        return new Float32Array([this.r, this.g, this.b, this.a]);
      }
      /**
       * Set values to shaders
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Color
       */


      setUniform(gl, uniLocation) {
        gl.uniform4fv(uniLocation, this.getArray());
      }

    }

    /* eslint-disable no-param-reassign */
    /**
     * Directional light (like sunlight)
     *
     * @export
     * @class Directional
     * @extends {Light}
     */

    class Directional extends Light {
      /**
       * Light color
       *
       * @type {Color}
       * @memberof Directional
       */
      color;
      /**
       * Creates an instance of Directional.
       * @param {Color} color Light color
       * @memberof Directional
       */

      constructor(color) {
        super();
        this.color = color;
      }
      /**
       * Add template light to list (for create uniform locations)
       *
       * @param {LightsUniform} lightsList
       * @memberof Directional
       */


      searchLight(lightsList) {
        lightsList.uDirectionalLight.push({
          dir: new Vector3(0, 1, 0),
          color: new Color(1, 1, 1)
        });
        lightsList.uDirectionalNum = lightsList.uDirectionalNum + 1;
        super.searchLight(lightsList);
      }
      /**
       * Add light setting value (for pass uniform value to shader)
       *
       * @param {Matrix4} parentMat
       * @param {LightsUniform} lightsList
       * @memberof Directional
       */


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
    /**
     * Point light
     *
     * @export
     * @class Point
     * @extends {Light}
     */

    class Point extends Light {
      /**
       * Light color
       *
       * @type {Color}
       * @memberof Point
       */
      color;
      /**
       * Light decay rate
       *
       * @type {number}
       * @memberof Point
       */

      decay;
      /**
       * Light distance limit
       *
       * @type {number}
       * @memberof Point
       */

      distance;
      /**
       * Creates an instance of Point.
       * @param {Color} _color Light color
       * @param {number} _distance Light distance limit
       * @param {number} [_decay] Light decay rate
       * @memberof Point
       */

      constructor(_color, _distance, _decay = 1) {
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
      /**
       * Add light setting value (for pass uniform value to shader)
       *
       * @param {Matrix4} parentMat
       * @param {LightsUniform} lightsList
       * @memberof Point
       */


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
    /**
     * Spot light
     *
     * @export
     * @class Spot
     * @extends {Light}
     */

    class Spot extends Light {
      /**
       * Light color
       *
       * @type {Color}
       * @memberof Spot
       */
      color;
      /**
       * Light decay rate
       *
       * @type {number}
       * @memberof Spot
       */

      decay;
      /**
       * Light distance limit
       *
       * @type {number}
       * @memberof Spot
       */

      distance;
      /**
       * Light area cone angle (full intensity in this angle) (cosine value)
       *
       * @type {number}
       * @memberof Spot
       */

      coneCos;
      /**
       * Penumbra angle (light intensity decays to 0 toward this angle ) (cosine value)
       *
       * @type {number}
       * @memberof Spot
       */

      penumbraCos;
      /**
       * Creates an instance of Spot.
       * @param {Color} _color Light color
       * @param {number} _coneCos Light cone angle (cosine)
       * @param {number} _penumbraCos Light penumbra angle (cosine)
       * @param {number} _distance Light distance limit
       * @param {number} [_decay] Light decay rate
       * @memberof Spot
       */

      constructor(_color, _coneCos, _penumbraCos, _distance, _decay = 1) {
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
      /**
       * Add light setting value (for pass uniform value to shader)
       *
       * @param {Matrix4} parentMat
       * @param {LightsUniform} lightsList
       * @memberof Spot
       */


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
    /**
     * Ambient camera.
     *
     * @export
     * @class Ambient
     * @extends {Light}
     */

    class Ambient extends Light {
      /**
       * light color
       *
       * @type {Color}
       * @memberof Ambient
       */
      color;
      /**
       * Creates an instance of Ambient.
       * @param {Color} color Light color
       * @memberof Ambient
       */

      constructor(color) {
        super();
        this.color = color;
      }
      /**
       * Add template light to list (for create uniform locations)
       *
       * @param {LightsUniform} lightsList
       * @memberof Ambient
       */


      searchLight(lightsList) {
        lightsList.uAmbientLight.push({
          color: new Color(1, 1, 1)
        });
        lightsList.uAmbientNum = lightsList.uAmbientNum + 1;
        super.searchLight(lightsList);
      }
      /**
       * Add light setting value (for pass uniform value to shader)
       *
       * @param {Matrix4} parentMat
       * @param {LightsUniform} lightsList
       * @memberof Ambient
       */


      prepare(parentMat, lightsList) {
        this.thisMat = parentMat.multiply(this.transform.getMatrix());
        lightsList.uAmbientLight.push({
          color: this.color
        });
        lightsList.uAmbientNum = lightsList.uAmbientNum + 1;
        this.children.map(child => child.prepare(this.thisMat, lightsList));
      }

    }

    const createOriginalLightsUniform = () => ({
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
        createOriginalLightsUniform: createOriginalLightsUniform,
        Directional: Directional,
        Point: Point,
        Spot: Spot,
        Ambient: Ambient
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
    /**
     * geometry class
     *
     * @export
     * @class Geometry
     */


    class Geometry {
      /**
       * vertex position
       *
       * @private
       * @type {number[]}
       * @memberof Geometry
       */
      vertex;
      /**
       * vertex tangent value
       *
       * @private
       * @type {(number[] | undefined)}
       * @memberof Geometry
       */

      tangent;
      /**
       * vertex bitangent value
       *
       * @private
       * @type {(number[] | undefined)}
       * @memberof Geometry
       */

      bitangent;
      /**
       * vertex normal value
       *
       * @private
       * @type {number[]}
       * @memberof Geometry
       */

      normal;
      /**
       * vertex uv coordinate
       *
       * @private
       * @type {number[]}
       * @memberof Geometry
       */

      uv;
      /**
       * face indicies
       *
       * @private
       * @type {number[]}
       * @memberof Geometry
       */

      index;
      /**
       * vertex uniform location
       *
       * @private
       * @type {number}
       * @memberof Geometry
       */

      vertexLocation = -1;
      /**
       * tangent uniform location
       *
       * @private
       * @type {number}
       * @memberof Geometry
       */

      tangentLocation = -1;
      /**
       * bitangent uniform location
       *
       * @private
       * @type {number}
       * @memberof Geometry
       */

      bitangentLocation = -1;
      /**
       * normal uniform location
       *
       * @private
       * @type {number}
       * @memberof Geometry
       */

      normalLocation = -1;
      /**
       * uv uniform location
       *
       * @private
       * @type {number}
       * @memberof Geometry
       */

      uvLocation = -1;
      /**
       * vertex vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      vertexVBO = null;
      /**
       * tangent vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      tangentVBO = null;
      /**
       * bitangent vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      bitangentVBO = null;
      /**
       * normal vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      normalVBO = null;
      /**
       * uv vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      uvVBO = null;
      /**
       * indicies vbo
       *
       * @private
       * @type {(WebGLBuffer | null)}
       * @memberof Geometry
       */

      indexIBO = null;
      /**
       * Creates an instance of Geometry.
       * @param {number[]} vertex vertex position (stride 3)
       * @param {number[]} normal normal value (stride 3)
       * @param {number[]} uv uv value (stride 2)
       * @param {number[]} index indicies (stride 3)
       * @param {number[]} [tangent] tangent valu (stride 3)
       * @param {number[]} [bitangent] bitangent value (stride 3)
       * @memberof Geometry
       */

      constructor(vertex, normal, uv, index, tangent, bitangent) {
        this.vertex = vertex;
        this.normal = normal;
        this.uv = uv;
        this.index = index;
        this.tangent = tangent;
        this.bitangent = bitangent;
      }
      /**
       * Create attribute's vbos
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLProgram} program
       * @memberof Geometry
       */


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
      /**
       * Set attribute's locations to shader
       *
       * @param {WebGLRenderingContext} gl
       * @memberof Geometry
       */


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
      /**
       * Get indicies length
       *
       * @return {*}  {number}
       * @memberof Geometry
       */


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

    /**
     * Integer
     *
     * @export
     * @class Integer
     * @extends {UniformValue<Integer>}
     */

    class Integer extends UniformValue {
      /**
       * value
       *
       * @type {number}
       * @memberof Integer
       */
      value;
      /**
       * Creates an instance of Integer.
       * @param {number} value
       * @memberof Integer
       */

      constructor(value) {
        super();
        this.value = value;
      }
      /**
       * Clone value
       *
       * @return {*}
       * @memberof Integer
       */


      clone() {
        return new Integer(this.value);
      }
      /**
       * Is equal
       *
       * @param {Integer} a
       * @return {*}
       * @memberof Integer
       */


      equals(a) {
        return this.value === a.value;
      }
      /**
       * Get Float32Array
       *
       * @return {*}
       * @memberof Integer
       */


      getArray() {
        return new Float32Array([this.value]);
      }
      /**
       * Set value to shader
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLUniformLocation} uniLocation
       * @memberof Integer
       */


      setUniform(gl, uniLocation) {
        gl.uniform1i(uniLocation, this.value);
      }

    }

    const isValidValue = a => typeof a === 'number' || a instanceof Vector2 || a instanceof Vector3 || a instanceof Vector4 || a instanceof Color || a instanceof Matrix4 || a instanceof Integer;
    const UniformSwitcher = (gl, uniLocation, value) => {
      if (!isValidValue(value)) return;
      if (typeof value === 'number') gl.uniform1f(uniLocation, value);else value.setUniform(gl, uniLocation);
    };

    const compileShader = (gl, shader, source) => {
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        // eslint-disable-next-line no-console
        console.error(source);
        throw new Error(gl.getShaderInfoLog(shader));
      }
    };
    /**
     * Material class
     *
     * @export
     * @class Material
     */


    class Material {
      /**
       * vertex shader's source string
       *
       * @private
       * @type {string}
       * @memberof Material
       */
      vertexSource;
      /**
       * fragmet shader's source string
       *
       * @private
       * @type {string}
       * @memberof Material
       */

      fragmentSource;
      /**
       * uniform map
       *
       * @type {MaterialUniforms}
       * @memberof Material
       */

      uniforms;
      /**
       * Vertex shader
       *
       * @private
       * @type {(WebGLShader | null)}
       * @memberof Material
       */

      vertexShader = null;
      /**
       * Fragment shader
       *
       * @private
       * @type {(WebGLShader | null)}
       * @memberof Material
       */

      fragmentShader = null;
      /**
       * uniform locations
       *
       * @private
       * @type {({ [s: string]: WebGLUniformLocation | null })}
       * @memberof Material
       */

      uniformLocations = {};
      /**
       * Creates an instance of Material.
       * @param {string} vertex
       * @param {string} fragment
       * @param {MaterialUniforms} [uniforms={}]
       * @memberof Material
       */

      constructor(vertex, fragment, uniforms = {}) {
        this.vertexSource = vertex;
        this.fragmentSource = fragment;
        this.uniforms = uniforms;
      }
      /**
       * Create WebGL program and get uniform location
       *
       * @param {WebGLRenderingContext} gl
       * @param {WebGLProgram} program
       * @param {MaterialUniforms} [defaultUniform={}]
       * @memberof Material
       */


      initialize(gl, program, defaultUniform = {}) {
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

        this.uniforms = { ...this.uniforms,
          ...defaultUniform
        };
        Object.keys(this.uniforms).map(key => {
          this.uniformLocations[key] = gl.getUniformLocation(program, key);
          return true;
        });
      }
      /**
       * Pass uniform values to shader
       *
       * @param {WebGLRenderingContext} gl
       * @memberof Material
       */


      setUniforms(gl) {
        Object.entries(this.uniformLocations).forEach(([key, value]) => value ? UniformSwitcher(gl, value, this.uniforms[key]) : null);
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

// Renderer uniforms
uniform vec3 uCameraPos;
uniform DirectionalLight uDirectionalLight[LIGHT_MAX];
uniform int uDirectionalNum;
uniform PointLight uPointLight[LIGHT_MAX];
uniform int uPointNum;
uniform SpotLight uSpotLight[LIGHT_MAX];
uniform int uSpotNum;
uniform AmbientLight uAmbientLight[LIGHT_MAX];
uniform int uAmbientNum;

// passed from vertex shader
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vTangent;
varying vec3 vBitangent;

// PBR parameters
uniform vec4 albedo;
uniform float roughness;
uniform float roughnessX;
uniform float roughnessY;
uniform float metallic;

// material setting
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
    const PhysicalFragment = (brdf = Primitives.Standard) => PhysicalFragmentBase.before + brdf + PhysicalFragmentBase.after;

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
        if (isValidValue(value[1])) list[`${base}${value[0]}`] = value[1];else if (Array.isArray(value[1])) ArrayName(`${base}${value[0]}`, value[1], list);else if (typeof value[1] === 'object') ObjectName(`${base}${value[0]}`, value[1], list);
        return true;
      });
    };

    const ArrayName = (base, original, list) => {
      for (let i = 0; i < original.length; i += 1) {
        if (isValidValue(original[i])) list[`${base}[${i}]`] = original[i];else if (Array.isArray(original[i])) ArrayName(`${base}[${i}]`, original[i], list);else if (typeof original[i] === 'object') ObjectName(`${base}[${i}]`, original[i], list);
      }
    };

    const ObjectToGLStructure = original => {
      const list = {};
      if (Array.isArray(original)) ArrayName('', original, list);else if (typeof original === 'object') ObjectName('', original, list);
      return list;
    };

    /**
     * Renderer
     *
     * @export
     * @class Renderer
     */

    class Renderer {
      /**
       * Renderer settings
       *
       * @private
       * @type {RendererParameter}
       * @memberof Renderer
       */
      parameter;
      /**
       * Target canvas
       *
       * @type {HTMLCanvasElement}
       * @memberof Renderer
       */

      canvas;
      /**
       * Rendering context
       *
       * @private
       * @type {WebGLRenderingContext}
       * @memberof Renderer
       */

      gl;
      /**
       * Root entity
       *
       * @type {(Empty | null)}
       * @memberof Renderer
       */

      entities = null;
      /**
       * Creates an instance of Renderer.
       * @param {RendererParameter} _parameter Renderer parameters
       * @memberof Renderer
       */

      constructor(_parameter) {
        this.parameter = _parameter;
        this.canvas = this.parameter.canvas;
        this.gl = this.canvas.getContext('webgl');
        this.parameter.clearColor = this.parameter.clearColor || new Color(0.0, 0.0, 0.0, 1.0);
        this.parameter.clearDepth = this.parameter.clearDepth || 1.0;
      }
      /**
       * Add root entity
       *
       * @param {Empty} entity scene root entity
       * @memberof Renderer
       */


      addEntities(entity) {
        const lightsList = createOriginalLightsUniform();
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
      /**
       * Render entities
       *
       * @param {Camera} camera Camera
       * @return {*}
       * @memberof Renderer
       */


      render(camera) {
        if (!this.entities) {
          // eslint-disable-next-line no-console
          console.error('Entities are not initialized.');
          return;
        }

        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.enable(this.gl.CULL_FACE);
        const clearColor = this.parameter.clearColor;
        this.gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
        this.gl.clearDepth(this.parameter.clearDepth);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
        const lightsList = createOriginalLightsUniform();
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
