/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'react-vant',
]);

module.exports = withPlugins([
  [withAntdLess, {
    /**
     * @see https://github.com/SolidZORO/next-plugin-antd-less
     */
    modifyVars: {
      // 全部样式变量 https://github.com/3lang3/react-vant/blob/main/src/styles/themes/default.less
      '@brand-color': '#ef5350',
    }
  }],
  withImages,
  withTM,
]);