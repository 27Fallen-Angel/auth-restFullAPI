const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
      name: {type: String, required: true, default: ''},
      email: {type: String, required: true, default: ''},
      password: {type: String, required: true, default: ''},
      date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('user', userSchema)
