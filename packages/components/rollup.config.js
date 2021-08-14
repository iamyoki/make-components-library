import pkg from './package.json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

const extensions = ['.ts', '.tsx', '.js', '.jsx']

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({ extensions, babelHelpers: 'bundled' }),
    // commonjs({ extensions }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime']
}

export default options
