import { Color } from '../utils/Color';
import { Camera } from '../camera/Camera';
import { Matrix4 } from '../utils/Matrix';
import { ObjectToGLStructure, UniformStruct } from '../utils/ObjectToGLStructure';
import { createOriginalLightsUniform, LightsUniform } from '../light/Primitives';
import { Empty } from '../object/Empty';
import { Integer } from '../utils/Integer';
import { UniformValue } from '../utils/UniformValue';

interface RendererParameter {
  canvas: HTMLCanvasElement;
  clearColor?: Color | undefined;
  clearDepth?: number | undefined;
}

export interface RenderOptions {
  uniforms: {
    [key: string]: UniformValue<any>;
  }
}

class Renderer {
  private parameter: RendererParameter;

  public canvas: HTMLCanvasElement;

  private gl: WebGLRenderingContext;

  entities: Empty | null = null;

  constructor(_parameter: RendererParameter) {
    this.parameter = _parameter;
    this.canvas = this.parameter.canvas;
    this.gl = <WebGLRenderingContext>this.canvas.getContext('webgl');
    this.parameter.clearColor = this.parameter.clearColor || new Color(0.0, 0.0, 0.0, 1.0);
    this.parameter.clearDepth = this.parameter.clearDepth || 1.0;
  }

  addEntities(entity: Empty) {
    const lightsList: LightsUniform = createOriginalLightsUniform();
    this.entities = entity;
    this.entities.searchLight(lightsList);

    const lightsUniform = ObjectToGLStructure(lightsList as unknown as UniformStruct);

    const defaultUniform = {
      mMatrix: null,
      vMatrix: null,
      pMatrix: null,
      rMatrix: null,
      uCameraPos: null,
      ...lightsUniform,
    };
    this.entities.initialize(this.gl, defaultUniform);
  }

  render(camera: Camera) {
    console.assert(!!this.entities, 'Entities are not initialized');
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.enable(this.gl.CULL_FACE);

    const clearColor: Color = <Color>this.parameter.clearColor;
    this.gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);
    this.gl.clearDepth(<number>this.parameter.clearDepth);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);

    if (!this.entities) return;
    const lightsList: LightsUniform = createOriginalLightsUniform();
    this.entities.prepare(new Matrix4(), lightsList);

    lightsList.uDirectionalNum = new Integer(lightsList.uDirectionalNum as number);
    lightsList.uPointNum = new Integer(lightsList.uPointNum as number);
    lightsList.uSpotNum = new Integer(lightsList.uSpotNum as number);
    lightsList.uAmbientNum = new Integer(lightsList.uAmbientNum as number);

    const lightsUniform = ObjectToGLStructure(lightsList as unknown as UniformStruct);

    const option: RenderOptions = {
      uniforms: {
        ...lightsUniform,
        ...camera.getMatrix(),
      },
    };

    this.entities.render(this.gl, option);
  }
}

export { Renderer };
