const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
      const token = req.header('loginWithToken')
      if (!token) return res.send('Ups!').status(401)

      try {
            const verified = jwt.verify(token, process.env.TokenSecret)
            req.user = verified
            next()
      } catch (e) {
            res.send('Invalid Token').status(400)
      }
}
