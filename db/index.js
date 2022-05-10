const mongoose = require('mongoose')
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
}

let MONGODB_URI = 'mongodb://127.0.0.1:27017/ikimonoDatabase'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
