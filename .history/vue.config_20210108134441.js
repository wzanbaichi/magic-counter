module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist` : '/dist',
  devServer: {
    host: '172.16.10.7',
    port: 8080,
  }
}