const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Gift = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    buff: { type: String, required: true },
    buffAmount: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Gift
