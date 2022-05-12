const mongoose = require('mongoose')
const { serializeInteger } = require('whatwg-url')
const Schema = mongoose.Schema

const Pet = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, requred: true },
    maxhealth: { type: Number, required: false },
    age: { type: Number, required: false },
    mood: { type: String, required: false },
    lastfed: { type: Date, required: false },
    lastwalked: { type: Date, required: false },
    lastplayed: { type: Date, required: false },
    gifts: [{ type: Schema.Types.ObjectId, ref: 'gifts' }],
    skills: { type: Array, required: false },
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Pet
