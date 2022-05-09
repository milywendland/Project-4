const { type } = require('os')
const db = require('../db')
const { Gift } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const gifts = [
    {
      name: 'The Communist Manifesto',
      type: 'Book',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'MAP OF THE SOUL: PERSONA by BTS',
      type: 'Album',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Nintendo Switch',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Box Fan',
      type: 'Appliance',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Pride Flag',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Gold Bar',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Baby Grand Piano',
      type: 'Instrument',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'T-Mobile Sidekick',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Tamagotchi',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 5
    },
    {
      name: 'Mochi Ice Cream - Melted in the Microwave',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'BTS Light Stick',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Pokemon Card: Magikarp',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Train Set',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'A Single Tube Sock',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Sewing Machine',
      type: 'Appliance',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Elder Wand',
      type: 'Arcane',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Super 8',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Bucket Hat',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Water Color Set',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Worlds Largest Rubber Band Ball',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Dinosaur Bone',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Vespa',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Toy Robot',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Ship in a Bottle',
      type: 'Misc',
      buff: 'Knowledge',
      buffAmount: 1
    },
    {
      name: 'Polaroid Camera',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Set of Chopsticks',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Shiny Rock',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 5
    },
    {
      name: 'Dyson Vacuum',
      type: 'Appliance',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Pair of Crocs',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 5
    },
    {
      name: 'Chainsaw',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Bagel',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Pokemon Ball',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'A Quarter',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Hatsune Miku Figure',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Barbie Dreamhouse',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Sony TC-1210 Walkman',
      type: 'Electronics',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Electric Toothbrush',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Incense Stick',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'The Holy Bible',
      type: 'Book',
      buff: 'Knowledge',
      buffAmount: 1
    },
    {
      name: 'Aeropress',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Chemex',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Onigiri',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 3
    },
    {
      name: 'Mcflurry',
      type: 'Treasure',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Cookie',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Bonsai Tree',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Fidget Spinner',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Jean Vest with Patches',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Soft Pretzel',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: '[USA] by Anamanaguchi',
      type: 'Album',
      buff: 'Mood',
      buffAmount: 4
    },
    {
      name: 'Hydroflask',
      type: 'Misc',
      buff: 'Health',
      buffAmount: 3
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
