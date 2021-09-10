const { override, addLessLoader, fixBabelImports, addPostcssPlugins } = require('customize-cra')


/**
 * 注意🥶
 * !!!!! 确保less-loader版本 < 8 !!!!!
 */

module.exports = override(
  addLessLoader({
    // 定制主题
    // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
    lessOptions: {
      modifyVars: {
        // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
        "@brand-color": "#ef5350", // 主题色
        // 默认是1px对应350px宽度的设计稿
        "@hd": '2px', // 750宽度设计稿
      },
      javascriptEnabled: true,
    }
  }),
  // 按需引入组件
  fixBabelImports('react-vant', {
    libraryDirectory: "es",
    style: true
  }),
  addPostcssPlugins([
    // 高清方案
    require('postcss-px-to-viewport')({
      // 设计稿尺寸
      viewportWidth: 750,
      unitPrecision: 4,
      viewportUnit: 'vw',
    })
  ]),
)