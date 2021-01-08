module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          21         test: /\.scss$/,
          22         loaders: ["style", "css", "sass"]
          23       },
      ]
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
}