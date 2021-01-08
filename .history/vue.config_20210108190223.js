'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      symlinks: false
    }
    //   module: {
    //     rules: [
    //       {
    //         test: /\.scss$/,
    //         loaders: ["style", "css", "sass"]
    //       }
    //     ]
    //   }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}