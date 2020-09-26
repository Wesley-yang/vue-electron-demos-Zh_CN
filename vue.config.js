module.exports = {
    productionSourceMap:false,
    //  先不压缩js
    chainWebpack (config) {
        config.optimization.minimize(false)
      }
}