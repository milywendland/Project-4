const { type } = require('os')
const db = require('../db')
const { Pet } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const pets = [
    {
      name: 'Canti',
      type: 'Robot Alien',
      maxhealth: 10,
      age: 0,
      mood: 'Happy',
      lastfed: '',
      lastwalked: '',
      lastplayed: '',
      gifts: [],
      skills: ['Flying', 'Being Very Cute'],
      img: 'https://64.media.tumblr.com/4e7fcc2e29469a1ee4e30a0b213ff1f0/8449f835e61b36f0-c4/s500x750/d8c94c0a03bcfeacce996f7ec994e2fa1546721e.pnj'
    },
    {
      name: 'Mikio',
      type: 'Tanuki',
      maxhealth: 10,
      age: 0,
      mood: 'Happy',
      lastfed: '',
      lastwalked: '',
      lastplayed: '',
      gifts: [],
      skills: ['Sneaky', 'Being Very Cute'],
      img: 'https://64.media.tumblr.com/82668259f08febdf4c6a2fa03010ea77/1f1a65e1ed55a36b-0b/s1280x1920/37ce88ca32de73dc35b75f6561a02c4d09b54d1b.pnj'
    },
    {
      name: 'Kaji',
      type: 'Kitsune',
      maxhealth: 10,
      age: 0,
      mood: 'Happy',
      lastfed: '',
      lastwalked: '',
      lastplayed: '',
      gifts: [],
      skills: ['Shapeshifting', 'Being Very Cute'],
      img: 'https://64.media.tumblr.com/9ccf3572dcbb8bfe6be7c270058dd950/1f1a65e1ed55a36b-14/s1280x1920/57e1d3476c24979ae78117d46e8dcaf03a421357.pnj'
    },
    {
      name: 'Midori',
      type: 'Kappa',
      maxhealth: 10,
      age: 0,
      mood: 'Happy',
      lastfed: '',
      lastwalked: '',
      lastplayed: '',
      gifts: [],
      skills: ['Eating Cucumbers', 'Being Very Cute'],
      img: 'https://64.media.tumblr.com/49bf5a8e6c3504c9d841e543d5e563d7/1f1a65e1ed55a36b-e2/s1280x1920/98319f130d18bcd64688852402092767fc60bbb6.pnj'
    }
  ]

  await Pet.insertMany(pets)

  console.log('Created Pets!')
}

const run = async () => {
  await main()
  db.close()
}

run()
