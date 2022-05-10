const mongoose = require('mongoose')
const bcrypt = require('bcyrpt')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    hash_password: { type: String, required: true },
    created: { type: Date, default: Date.now },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }]
  },
  { timestamps: true }
)

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password)
}

module.exports = User
