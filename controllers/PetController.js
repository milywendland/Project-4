const res = require('express/lib/response')
const { Pet } = require('../models/index')

const getPetById = async (req, res) => {
  try {
    const { id } = req.params
    const pet = await Pet.findById(id)
    if (pet) {
      return res.status(200).json({ pet })
    }
    return res.status(404).send('Pet does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editPet = async (req, res) => {
  const { id } = req.params
  Pet.findByIdAndUpdate(id, req.body, { new: true }, (error, pet) => {
    if (error) {
      res.status(500).send(error)
    }
    if (!game) {
      res.status(500).send('oops no pet found!')
    } else {
      return res.status(200).json({ pet })
    }
  })
}

const deletePet = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pet.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('pet deleted :(')
    }
    throw new Error('pet not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPetById,
  editPet,
  deletePet
}
