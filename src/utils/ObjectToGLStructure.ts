/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { isValidValue, UniformType } from './UniformSwitcher';
import { UniformValue } from './UniformValue';

export interface UniformStruct {
  [key: string]: UniformType | UniformType[] | UniformStruct | UniformStruct[];
}


const ObjectName = (_base: string, original: any, list: any) => {
  const base = _base === '' ? _base : `${_base}.`;
  Object.entries(original).map((value) => {
    if (isValidValue(value[1])) list[`${base}${value[0]}`] = value[1];
    else if (Array.isArray(value[1])) ArrayName(`${base}${value[0]}`, value[1], list);
    else if (typeof value[1] === 'object') ObjectName(`${base}${value[0]}`, value[1], list);
    return true;
  });
};

const ArrayName = (base: string, original: any, list: any) => {
  for (let i: number = 0; i < original.length; i += 1) {
    if (isValidValue(original[i])) list[`${base}[${i}]`] = original[i];
    else if (Array.isArray(original[i])) ArrayName(`${base}[${i}]`, original[i], list);
    else if (typeof original[i] === 'object') ObjectName(`${base}[${i}]`, original[i], list);
  }
};

export const ObjectToGLStructure = (original: UniformStruct): { [key: string]: UniformValue<any> } => {
  const list = {};
  if (Array.isArray(original)) ArrayName('', original, list);
  else if (typeof original === 'object') ObjectName('', original, list);
  return list;
};
