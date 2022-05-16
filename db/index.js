const mongoose = require('mongoose')
require('dotenv').config()
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
}

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/ikimonoDatabase'

mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
