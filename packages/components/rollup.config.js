import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

const extensions = ['.ts', '.tsx', '.js', '.jsx']

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    typescript({ tsconfig: './tsconfig.json', declaration: false, declarationMap: false }),
  ]
}

export default options
