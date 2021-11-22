import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'
const packageJson = require('./package.json')

export default {
  input: packageJson.source,
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
      // name: 'reactImagePlugin',
      // globals: { 'styled-components': 'styled' }
    }
    // {
    //   file: packageJson.module,
    //   format: 'esm',
    //   sourcemap: true,
    //   exports: 'default'
    // }
  ],
  external: ['react'],

  plugins: [
    peerDepsExternal(),
    resolve(),
    // commonjs(),
    postcss({
      extensions: ['.css'],
      // modules: true,
      extract: true,
      minimize: true,
      modules: false
      // extract: 'index.css'
      //
    }),
    image(),
    terser(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      plugins: ['babel-plugin-styled-components']
    }),
    commonjs()
  ]
}
