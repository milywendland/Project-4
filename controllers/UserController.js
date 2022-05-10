const { User } = require('../models')
const middleware = require('../middleware')

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      res.send({ user: payload, token })
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    throw error
  }
}

const register = async (req, res) => {
  try {
    const { username, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ username, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.body.id } })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)

      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password Updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Invalid Credentials' })
  } catch (error) {
    throw error
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals

  res.send(payload)
}

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy({ where: { id: req.params.id } })
    res.send(deleteUser)
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'user id does not exist' })
  }
}

module.exports = {
  login,
  register,
  updatePassword,
  checkSession,
  deleteUser
}
