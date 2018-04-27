const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@'],
  sitemap: [
    {
      path: '/sitemap.xml',
      routes: [
        '/',
        '/foo',
        '/bar'
      ]
    },
    {
      path: '/testing.xml',
      routes: [
        '/',
        '/new',
        '/sitemap'
      ]
    }
  ]
}
