module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}` :,
  devServer: {
    host: '172.16.10.7',
    port: 8080,
  }
}