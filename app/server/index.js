const express = require('express')
const moment = require('moment')

const PORT = process.env.PORT
const HOST = '0.0.0.0'

const app = express()
app.set('trust proxy', ['uniquelocal'])


app.get('/', (req, res, next) => {
  return res.end(JSON.stringify({
    success: false,
    data: {
      message: 'OK',
      timestamp: moment().format('DD MMMM YYYY HH:mm:ss'),
      requestHeaders: req.headers,
      portAccess: PORT
    }
  }, null, 2))
})

app.get('/cache', (req, res, next) => {
  return res.end(JSON.stringify({
    success: false,
    data: {
      message: 'OK',
      last_caching_time: moment().format('DD MMMM YYYY HH:mm:ss')
    }
  }, null, 2))
})


app.listen(PORT, HOST,() => console.log(`App is running using port ${HOST}:${PORT}`))