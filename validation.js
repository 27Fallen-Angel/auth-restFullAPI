const Joi = require('@hapi/joi')

const registrationVal = data => {
      const schema = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().required().email(),
            password: Joi.string().min(6).required()
      })
      return schema.validate(data)
}

const loginVal = data => {
      const schema = Joi.object({
            email: Joi.string().required().email(),
            password: Joi.string().min(6).required()
      })
      return schema.validate(data)
}

module.exports.registrationVal = registrationVal
module.exports.loginVal = loginVal
