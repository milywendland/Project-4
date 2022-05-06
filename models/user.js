const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    token: { type: String, required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }]
  },
  { timestamps: true }
)

module.exports = User
