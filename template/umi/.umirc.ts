import { defineConfig } from 'umi';

export default defineConfig({
  theme: {
    // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
    "brand-color": "#ef5350",
    // hd需要根据设计稿尺寸设置
    // 若设计稿宽度为350则使用默认1px即可
    "hd": '2px' // 对应750设计稿宽度
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // 按需引入组件
  extraBabelPlugins: [
    ['import', { libraryName: "react-vant", style: true }],
  ],
  extraPostCSSPlugins: [
    // 高清方案
    require('postcss-px-to-viewport')({
      // 设计稿宽度
      viewportWidth: 750,
      unitPrecision: 4,
      viewportUnit: 'vw'
    }),
  ],
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/user' },
  ],
  fastRefresh: {},
});
