module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      symlinks: false
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
      ]
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
}