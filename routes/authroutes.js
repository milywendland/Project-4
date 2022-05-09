const { auth } = require('express-openid-connect')
const APP_SECRET = process.env.APP_SECRET

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: APP_SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'CX5fWLn9xXb8UjLU3vqHfj2BkKDhV4Lb',
  issuerBaseURL: 'https://dev-0bil0zze.us.auth0.com'
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config))

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})
