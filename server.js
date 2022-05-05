const express = require('express')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { auth } = require('express-openid-connect')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'CX5fWLn9xXb8UjLU3vqHfj2BkKDhV4Lb',
  issuerBaseURL: 'https://dev-0bil0zze.us.auth0.com'
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(auth(config))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})
