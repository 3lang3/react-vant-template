const px2viewport = require('postcss-px-to-viewport');

module.exports = () => {
  return {
    plugins: [
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 375,
        exclude: [/^(?!.*node_modules\/react-vant)/]
      }),
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 750,
        exclude: [/node_modules\/react-vant/i]
      })
    ] 
  }
}
