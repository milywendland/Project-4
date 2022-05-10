const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    created: { type: Date, default: Date.now },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }]
  },
  { timestamps: true }
)

module.exports = User
