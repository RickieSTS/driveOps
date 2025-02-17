const Joi = require('joi');

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
}).strict()

module.exports = { loginValidation }