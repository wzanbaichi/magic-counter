module.exports = {
  
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
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
}