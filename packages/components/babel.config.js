const BABEL_ENV = process.env.BABEL_ENV
const isCJS = ['cjs', 'commonjs'].includes(BABEL_ENV?.toLowerCase())
const isESM = ['esm', 'esmodule'].includes(BABEL_ENV?.toLowerCase())

const presets = [
  [
    '@babel/preset-env',
    {
      loose: true,
      modules: isCJS ? 'cjs' : false,
      targets: {
        esmodules: isESM ? true : undefined
      }
    }
  ],
  '@babel/preset-typescript',
  '@babel/preset-react'
]

const plugins = [
  [
    'module-resolver',
    {
      alias: {
        '@': './src'
      }
    }
  ]
]

module.exports = api => (
  api.cache(true),
  {
    presets,
    plugins
  }
)
