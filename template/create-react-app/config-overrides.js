const { override, addLessLoader, fixBabelImports, addPostcssPlugins } = require('customize-cra')



module.exports = override(
  addLessLoader({
    // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
    lessOptions: {
      modifyVars: {
        // 直接覆盖变量
        "@brand-color": "#ef5350", // 主题色
        // 默认是1px对应350px宽度的设计稿
        "@hd": '2px', // 750宽度设计稿
      },
      javascriptEnabled: true,
    }
  }),
  fixBabelImports('react-vant', {
    libraryDirectory: "es",
    style: true
  }),
  addPostcssPlugins([
    // 搞清方案
    require('postcss-px-to-viewport')({
      // 设计稿尺寸
      viewportWidth: 750,
      unitPrecision: 4,
      viewportUnit: 'vw',
    })
  ]),
)