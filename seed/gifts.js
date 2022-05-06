const { type } = require('os')
const db = require('../db')
const { Gift } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const gifts = [
    {
      name: 'The Communist Manifesto',
      type: 'Book',
      buff: 'Knowledge'
    },
    {
      name: 'MAP OF THE SOUL: PERSONA by BTS',
      type: 'Album',
      buff: 'Mood'
    },
    {
      name: 'Nintendo Switch',
      type: 'Electronics',
      buff: 'Mood'
    },
    {
      name: 'Box Fan',
      type: 'Appliance',
      buff: 'Mood'
    },
    {
      name: 'Pride Flag',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Gold Bar',
      type: 'Treasure',
      buff: 'Mood'
    },
    {
      name: 'Baby Grand Piano',
      type: 'Instrument',
      buff: 'Knowledge'
    },
    {
      name: 'T-Mobile Sidekick',
      type: 'Electronics',
      buff: 'Mood'
    },
    {
      name: 'Tamagotchi',
      type: 'Electronics',
      buff: 'Mood'
    },
    {
      name: 'Mochi Ice Cream - Melted in the Microwave',
      type: 'Snack',
      buff: 'Health'
    },
    {
      name: 'BTS Light Stick',
      type: 'Treasure',
      buff: 'Personality'
    },
    {
      name: 'Pokemon Card: Magikarp',
      type: 'Treasure',
      buff: 'Mood'
    },
    {
      name: 'Train Set',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'A Single Tube Sock',
      type: 'Treasure',
      buff: 'Mood'
    },
    {
      name: 'Sewing Machine',
      type: 'Appliance',
      buff: 'Mood'
    },
    {
      name: 'Elder Wand',
      type: 'Arcane',
      buff: 'Knowledge'
    },
    {
      name: 'Super 8',
      type: 'Electronics',
      buff: 'Personality'
    },
    {
      name: 'Bucket Hat',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Water Color Set',
      type: 'Misc',
      buff: 'Mood'
    },
    {
      name: 'Worlds Largest Rubber Band Ball',
      type: 'Treasure',
      buff: 'Mood'
    },
    {
      name: 'Dinosaur Bone',
      type: 'Treasure',
      buff: 'Knowledge'
    },
    {
      name: 'Vespa',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Toy Robot',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'Ship in a Bottle',
      type: 'Misc',
      buff: 'Knowledge'
    },
    {
      name: 'Polaroid Camera',
      type: 'Electronics',
      buff: 'Personality'
    },
    {
      name: 'Set of Chopsticks',
      type: 'Treasure',
      buff: 'Knowledge'
    },
    {
      name: 'Shiny Rock',
      type: 'Treasure',
      buff: 'Mood'
    },
    {
      name: 'Dyson Vacuum',
      type: 'Appliance',
      buff: 'Mood'
    },
    {
      name: 'Pair of Crocs',
      type: 'Treasure',
      buff: 'Personality'
    },
    {
      name: 'Chainsaw',
      type: 'Misc',
      buff: 'Mood'
    },
    {
      name: 'Bagel',
      type: 'Snack',
      buff: 'Health'
    },
    {
      name: 'Pokemon Ball',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'A Quarter',
      type: 'Treasure',
      buff: 'Knowledge'
    },
    {
      name: 'Hatsune Miku Figure',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'Barbie Dreamhouse',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'Sony TC-1210 Walkman',
      type: 'Electronics',
      buff: 'Mood'
    },
    {
      name: 'Electric Toothbrush',
      type: 'Misc',
      buff: 'Mood'
    },
    {
      name: 'Incense Stick',
      type: 'Misc',
      buff: 'Mood'
    },
    {
      name: 'The Holy Bible',
      type: 'Book',
      buff: 'Knowledge'
    },
    {
      name: 'Aeropress',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Chemex',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Onigiri',
      type: 'Snack',
      buff: 'Health'
    },
    {
      name: 'Mcflurry',
      type: 'Treasure',
      buff: 'Health'
    },
    {
      name: 'Cookie',
      type: 'Snack',
      buff: 'Health'
    },
    {
      name: 'Bonsai Tree',
      type: 'Misc',
      buff: 'Mood'
    },
    {
      name: 'Fidget Spinner',
      type: 'Toy',
      buff: 'Mood'
    },
    {
      name: 'Jean Vest with Patches',
      type: 'Misc',
      buff: 'Personality'
    },
    {
      name: 'Soft Pretzel',
      type: 'Snack',
      buff: 'Health'
    },
    {
      name: '[USA] by Anamanaguchi',
      type: 'Album',
      buff: 'Mood'
    },
    {
      name: 'Hydroflask',
      type: 'Misc',
      buff: 'Health'
    }
  ]

  await Gift.insertMany(gifts)

  console.log('Created Gifts!')
}

const run = async () => {
  await db.dropDatabase()
  await main()
  db.close()
}

run()
