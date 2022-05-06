const mongoose = require('mongoose')
const GiftSchema = require('./gift')
const UserSchema = require('./user')
const PetSchema = require('./pet')

const Gift = mongoose.model('gifts', GiftSchema)
const User = mongoose.model('users', UserSchema)
const Pet = mongoose.model('pets', PetSchema)

module.exports = {
  Gift,
  User,
  Pet
}
