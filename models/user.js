const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    hash_password: { type: String },
    created: { type: Date, default: Date.now },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }]
  },
  { timestamps: true }
)

User.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password)
}

module.exports = User
