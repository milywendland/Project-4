const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/PetController')

router.get('/', (req, res) => res.send('this is root'))
router.get('/choosepet', controllers.getAllPets)
router.get('/gameplay', controllers.getPetById)

module.exports = router
