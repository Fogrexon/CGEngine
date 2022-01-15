import * as vbasic from './vertex/Basic';
import * as fbasic from './fragment/Basic';
import * as phong from './fragment/Phong';
import * as physical from './fragment/Physical';

export { Primitives as PBRPrimitives } from './fragment/BRDF/Primitives';
export * as PBRFunctions from './fragment/BRDF/Functions';

export const ShaderPrimitives: { [key: string]: any } = {
  ...vbasic,
  ...fbasic,
  ...phong,
  ...physical,
};
