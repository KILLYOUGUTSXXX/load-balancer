const express = require('express')
const moment = require('moment')

const PORT = process.env.PORT
const HOST = '173.12.15.10'

const app = express()
app.set('trust proxy', ['uniquelocal'])


app.get('/', (req, res, next) => {
  if(req.headers['resource-from'] !== 'https://github.com/KILLYOUGUTSXXX') { // validate the incoming request, make sure the headers including key "resource-from" & correct values.
    res.statusCode = 403
    return res.end('<p style="color:red;font-size:52px;">Access Denied</p>')
  }
  
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