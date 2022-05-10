const { Router } = require('express')
const router = Router()
const petController = require('../controllers/PetController')
const authController = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/', (req, res) => res.send('this is root'))
router.get('/choosepet', petController.getAllPets)
router.get('/gameplay', petController.getPetById)
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
