module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    externals: {
      'AMap': 'AMap',
      'AMapUI': 'AMapUI',
    },
    resolve: {
      alias: {
        '@': resolve('src')
      },
      symlinks: false
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          // options: {
          //   fix: true,
          //   cache: false,
          //   failOnError: true
          // }
        }
      ]
    },
  }
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
}