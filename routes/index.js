const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('this is root'))
router.get('/choosepet', controllers.getAllPets)
router.get('/gameplay', controllers.getPetById)
router.post('/tasks', controllers.loginRequired)
router.post('/signup', controllers.register)
router.post('/signin', controllers.sign_in)

module.exports = router
