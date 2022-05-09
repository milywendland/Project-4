const res = require('express/lib/response')
const { Gift } = require('../models/index')

const getGiftById = async (req, res) => {
  try {
    const { id } = req.params
    const gift = await Gift.findById(id)
    if (gift) {
      return res.status(200).json({ gift })
    }
    return res.status(404).send('Gift does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = [getGiftById]
