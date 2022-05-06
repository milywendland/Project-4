const mongoose = require('mongoose')
const { serializeInteger } = require('whatwg-url')
const Schema = mongoose.Schema

const Pet = new Schema(
  {
    name: { type: String, required: true },
    health: { type: Number, required: true },
    age: { type: Number, required: true },
    mood: { type: String, required: true },
    lastfed: { type: Date, required: true },
    lastwalked: { type: Date, required: true },
    lastplayed: { type: Date, required: true },
    gifts: [{ type: Schema.Types.ObjectId, ref: 'gifts' }],
    personality: { type: String, required: true },
    skills: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = Pet
