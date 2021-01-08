'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const TerserPlugin = require('terser-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
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
  }
}