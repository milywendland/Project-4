const { Router } = require('express')
const req = require('express/lib/request')
const router = Router()
const petController = require('../controllers/PetController')
const authController = require('../controllers/UserController')
const giftController = require('../controllers/GiftController')
const middleware = require('../middleware')

router.get('/', (req, res) => res.send('this is root'))
router.get('/choosepet', petController.getAllPets)
router.get('/choosepet/edit/:id', petController.getPetById)
router.get('/gifts', giftController.getAllGifts)
router.put('/choosepet/edit/:id', petController.editPet)
router.post('/choosepet/:userid', petController.createPet)
router.get('/profile/:id', petController.getUser)
router.delete('/profile/:id', petController.deletePet)

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
router.get('/session', authController.checkSession)

module.exports = router
