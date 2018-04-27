const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const PORT = 3001

module.exports = {
  async createConfig (config) {
    let nuxt
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(PORT, 'localhost')

    return nuxt
  },
  get (path) {
    return request({
      url: `http://localhost:${PORT}${path}`,
      resolveWithFullResponse: true
    })
  }
}
