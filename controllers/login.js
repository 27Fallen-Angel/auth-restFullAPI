const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {loginVal} = require('../validation')

exports.login = async (req, res) => {
      const {error} = loginVal(req.body)
      if (error) return res.send(error.details[0].message).status(400)

      const user = await User.findOne({email: req.body.email})
      if (!user) return res.send('Email not found').status(400)

      const pass = await bcrypt.compare(req.body.password, user.password)
      if (!pass) return res.send('Invalid password').status(400)

      const token = jwt.sign({_id: user._id}, process.env.TokenSecret)
      res.header('loginWithToken', token).send(token)
}
