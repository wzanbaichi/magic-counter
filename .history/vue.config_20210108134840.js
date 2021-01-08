module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  }
}