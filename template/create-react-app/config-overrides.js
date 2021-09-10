const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  fixBabelImports('react-vant', {
    style: true
  })
)