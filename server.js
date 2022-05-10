const express = require('express')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(' ')[1],
      'RESTFULAPIs',
      function (err, decode) {
        if (err) req.user = undefined
        req.user = decode
        next()
      }
    )
  } else {
    req.user = undefined
    next()
  }
})

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

module.exports = app
