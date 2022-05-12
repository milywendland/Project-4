const { Router } = require('express')
const req = require('express/lib/request')
const router = Router()
const petController = require('../controllers/PetController')
const authController = require('../controllers/UserController')
const giftController = require('../controllers/GiftController')
const middleware = require('../middleware')

router.get('/', (req, res) => res.send('this is root'))
router.get('/choosepet', petController.getAllPets)
router.get('/choosepet/:id', petController.getPetById)
router.get('/gameplay/:id', petController.getPetById)
router.get('/gifts', giftController.getAllGifts)
router.put('/choosepet/edit/:id', petController.editPet)
router.post('/choosepet', petController.createPet)

// - auth - //
router.post('/register', authController.register)
router.post('/signin', authController.login)
router.put(
  '/profile',
  middleware.stripToken,
  middleware.verifyToken,
  authController.updatePassword
)
router.delete('/:id', authController.deleteUser)

module.exports = router
