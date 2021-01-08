module.exports = {
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/style/varible.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? `${process.cwd()}/dist/` : '/dist',
}