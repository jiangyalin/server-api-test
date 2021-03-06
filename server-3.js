const path = require('path')
const express = require('express')
const app = express()
const expressStaticGzip = require('express-static-gzip')
const history = require('connect-history-api-fallback')

app.use('/', expressStaticGzip('static'))

app.use(history({
  verbose: true,
  index: '/'
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(8020, () => {
  console.log('服务启动' + 8020)
})
