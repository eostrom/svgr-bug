const withSvgr = require('next-plugin-svgr')

module.exports = withSvgr({
  reactStrictMode: true,
  fileLoader: true,
  assetPrefix: '',
})
