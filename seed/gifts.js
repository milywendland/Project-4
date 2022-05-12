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
    },
    {
      name: 'Grimoire',
      type: 'Arcane',
      buff: 'Knowledge',
      buffAmount: 4
    },
    {
      name: 'Eye of Newt',
      type: 'Arcane',
      buff: 'Knowledge',
      buffAmount: 1
    },
    {
      name: 'Quartz Crystal',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Cauldron',
      type: 'Arcane',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'Cucumber',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Carrot',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Graham Crackers',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Glass of Milk',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Froggie Hat',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Overalls',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Light Up Keychain',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'ANTIFA Sticker',
      type: 'Misc',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Coffee',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Paper Airplane',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Bubblegum',
      type: 'Snack',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Bandaid',
      type: 'Misc',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Teddy Bear',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Tangerine',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Notepad',
      type: 'Misc',
      buff: 'Knowledge',
      buffAmount: 1
    },
    {
      name: 'Pillow',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Pencil',
      type: 'Misc',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'Bath Robe',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Helmet',
      type: 'Misc',
      buff: 'Health',
      buffAmount: 5
    },
    {
      name: 'Soft Blankey',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Bath Bomb',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 4
    },
    {
      name: 'Swiffer Wet Jet',
      type: 'Appliance',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Cat Food',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Water Fountain',
      type: 'Appliance',
      buff: 'Health',
      buffAmount: 3
    },
    {
      name: 'Zen Garden',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Fortune Cooki',
      type: 'Treasure',
      buff: 'Health',
      buffAmount: 3
    },
    {
      name: 'Replica Human Skull',
      type: 'Misc',
      buff: 'Knowledge',
      buffAmount: 3
    },
    {
      name: 'Green Apple',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Chocolate Milk',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: "S'mores",
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Turkey Sandwich',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Spinach Dip',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Elote',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 4
    },
    {
      name: 'Falafel',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Youtube Premium Subscription',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 5
    },
    {
      name: 'Opal Ring',
      type: 'Arcane',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Eye Mask',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Gundam Kit',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Rapier',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'Skateboard',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Freddy Fazbear Figure',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Uzumaki by Junji Ito',
      type: 'Book',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'A World Map',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'Dungeon Master Guide',
      type: 'Book',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Squishmallow',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 4
    },
    {
      name: 'Boogie Board',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Rocking Chair',
      type: 'Misc',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Bowling Ball',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Chicken Nuggets',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'Veggie Burger',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 3
    },
    {
      name: 'Grilled Cheese Sammich',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    },
    {
      name: 'A Wheel of Cheese',
      type: 'Treasure',
      buff: 'Health',
      buffAmount: 5
    },
    {
      name: 'Pringles',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 1
    },
    {
      name: 'Gameboy Color',
      type: 'Treasure',
      buff: 'Mood',
      buffAmount: 3
    },
    {
      name: 'Victorian Hand Mirror',
      type: 'Treasure',
      buff: 'Knowledge',
      buffAmount: 2
    },
    {
      name: 'Operation Board Game',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 2
    },
    {
      name: 'Oregon Trail Game',
      type: 'Toy',
      buff: 'Mood',
      buffAmount: 1
    },
    {
      name: 'Whey Protein Shake',
      type: 'Snack',
      buff: 'Health',
      buffAmount: 2
    }
  ]

  await Gift.insertMany(gifts)

  console.log('Created Gifts!')
}

const run = async () => {
  await main()
  db.close()
}

run()
