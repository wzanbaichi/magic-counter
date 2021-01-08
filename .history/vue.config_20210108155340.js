module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    }
  }
}