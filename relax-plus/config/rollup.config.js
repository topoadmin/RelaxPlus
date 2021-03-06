import vue from 'rollup-plugin-vue';
import {uglify} from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import path from 'path'
import json from '@rollup/plugin-json'

export default {
  input: path.resolve('relax-plus/package/index.js'),
  output: {
      format: 'umd',
      name: 'RelaxPlus',
      file: path.resolve('lib/relax.min.js')
  },
  plugins: [
    json(),
    vue(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    uglify()
  ]
}