const router = require('express').Router()
const token = require('./verifyToken')

router.get('/', token, (req, res) => {
      res.json({title: 'Hello world!', description: 'This is my API'})
})

module.exports = router
