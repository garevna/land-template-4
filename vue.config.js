module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '.'
      }
    }
  },
  pwa: {
    themeColor: '#F54436',
    msTileColor: '#000000',
    iconPaths: {
      favicon32: '~favicon-32x32.png',
      favicon16: '~favicon-16x16.png',
      appleTouchIcon: '~apple-touch-icon.png',
      maskIcon: '~favicon.png',
      msTileImage: '~mstile-150x150.png'
    }
  },
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dgtek-covid/'
    : '/'
}
