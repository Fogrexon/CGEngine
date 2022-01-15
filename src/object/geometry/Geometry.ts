const createVBO = (gl: WebGLRenderingContext, data: number[]): WebGLBuffer => {
  const vbo: WebGLBuffer = <WebGLBuffer>gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return vbo;
};

const createIBO = (gl: WebGLRenderingContext, index: number[]): WebGLBuffer => {
  const ibo: WebGLBuffer = <WebGLBuffer>gl.createBuffer();

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
export class Geometry {
  /**
   * vertex position
   *
   * @private
   * @type {number[]}
   * @memberof Geometry
   */
  private vertex: number[];

  /**
   * vertex tangent value
   *
   * @private
   * @type {(number[] | undefined)}
   * @memberof Geometry
   */
  private tangent: number[] | undefined;

  /**
   * vertex bitangent value
   *
   * @private
   * @type {(number[] | undefined)}
   * @memberof Geometry
   */
  private bitangent: number[] | undefined;

  /**
   * vertex normal value
   *
   * @private
   * @type {number[]}
   * @memberof Geometry
   */
  private normal: number[];

  /**
   * vertex uv coordinate
   *
   * @private
   * @type {number[]}
   * @memberof Geometry
   */
  private uv: number[];

  /**
   * face indicies
   *
   * @private
   * @type {number[]}
   * @memberof Geometry
   */
  private index: number[];

  /**
   * vertex uniform location
   *
   * @private
   * @type {number}
   * @memberof Geometry
   */
  private vertexLocation: number = -1;

  /**
   * tangent uniform location
   *
   * @private
   * @type {number}
   * @memberof Geometry
   */
  private tangentLocation: number = -1;

  /**
   * bitangent uniform location
   *
   * @private
   * @type {number}
   * @memberof Geometry
   */
  private bitangentLocation: number = -1;

  /**
   * normal uniform location
   *
   * @private
   * @type {number}
   * @memberof Geometry
   */
  private normalLocation: number = -1;

  /**
   * uv uniform location
   *
   * @private
   * @type {number}
   * @memberof Geometry
   */
  private uvLocation: number = -1;

  /**
   * vertex vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private vertexVBO: WebGLBuffer | null = null;

  /**
   * tangent vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private tangentVBO: WebGLBuffer | null = null;

  /**
   * bitangent vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private bitangentVBO: WebGLBuffer | null = null;

  /**
   * normal vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private normalVBO: WebGLBuffer | null = null;

  /**
   * uv vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private uvVBO: WebGLBuffer | null = null;

  /**
   * indicies vbo
   *
   * @private
   * @type {(WebGLBuffer | null)}
   * @memberof Geometry
   */
  private indexIBO: WebGLBuffer | null = null;

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
  constructor(
    vertex: number[],
    normal: number[],
    uv: number[],
    index: number[],
    tangent?: number[],
    bitangent?: number[]
  ) {
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
  setupAttribute(gl: WebGLRenderingContext, program: WebGLProgram): void {
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
  attachAttribute(gl: WebGLRenderingContext): void {
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
  getIndexLength(): number {
    return this.index.length;
  }
}
