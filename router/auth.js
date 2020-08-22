const router = require('express').Router()
const login = require('../controllers/login')
const register = require('../controllers/register')

router.post('/register', register.register)
router.post('/login', login.login)

module.exports = router
