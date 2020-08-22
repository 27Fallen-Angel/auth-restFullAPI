const User = require('../model/user')
const bcrypt = require('bcryptjs')
const {registrationVal} = require('../validation')

exports.register = async (req, res) => {
      const {error} = registrationVal(req.body)
      if (error) return res.send(error.details[0].message).status(400)

      if (await User.findOne({email: req.body.email})) return res.send('Email already exists').status(400)

      const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

      const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
      })
      try {
            const newUser = await user.save()
            res.send({id: newUser._id})
      } catch (e) {
            res.send(e).status(400)
      }
}
