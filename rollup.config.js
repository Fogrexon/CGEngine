import babel from '@rollup/plugin-babel';
import glslify from 'rollup-plugin-glslify';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.js'];

export default [

  {
    input: 'src/main.ts',

    preserveModules: true,

    output: {
      dir: 'build/commonjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      glslify(),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/commonjs/src',
      }),
    ],
  },

  {
    input: 'src/main.ts',
    preserveModules: true,
    output: {
      dir: 'build/esm',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      glslify(),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/esm/src',
      }),
    ],
  },

  {
    input: 'src/main.ts',
    output: {
      file: 'build/umd/cg-engine.js',
      // dir: 'build/umd',
      format: 'umd',
      name: 'CGEngine',
      sourcemap: true,
    },
    plugins: [
      glslify(),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/umd',
      }),
    ],
  },
];
