import test from 'ava'
import config from './fixture/nuxt.config'
import { createConfig, get } from './utils'

let nuxt

test.before(async () => {
  nuxt = await createConfig(config)
})

test('Route / exists and renders correcly', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('Works!'))
})

test('Main sitemap should exists', async t => {
  let { body, statusCode } = await get('/sitemap.xml')
  t.is(statusCode, 200)
  t.true(body.includes('<loc>http://localhost:3001/</loc>'))
  t.true(true)
})

test.after.always('Closing server and nuxt.js', () => {
  nuxt.close()
})
