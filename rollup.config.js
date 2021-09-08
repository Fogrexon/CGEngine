import babel from '@rollup/plugin-babel';
import glslify from 'rollup-plugin-glslify';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.js'];

export default [

  {
    input: 'src/index.ts',

    preserveModules: true,

    output: {
      dir: 'build/commonjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      glslify(),
      postcss({
        extract: true,
      }),
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
    input: 'src/index.ts',
    preserveModules: true,
    output: {
      dir: 'build/esm',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      glslify(),
      postcss({
        extract: true,
      }),
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
    input: 'src/index.ts',
    output: {
      file: 'build/umd/graphim.js',
      // dir: 'build/umd',
      format: 'umd',
      name: 'Graphim',
      sourcemap: true,
    },
    plugins: [
      glslify(),
      postcss({
        extract: true,
      }),
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
