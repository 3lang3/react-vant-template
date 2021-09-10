/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  /**
   * @see https://github.com/SolidZORO/next-plugin-antd-less
   */
  modifyVars: {
    // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
    '@brand-color': '#ef5350',
  },

  webpack(config) {
    return config;
  },
});