const Joi = require('joi');

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
}).strict()

const sessionValidation = Joi.object({
    cookie: Joi.object().required().keys({
        originalMaxAge: Joi.number().greater(0).required(),
        _expires: Joi.date().iso().greater(new Date()).required(),
        secure: Joi.string().valid('true').required(),
        httpOnly: Joi.boolean().truthy(true).required(),
        path: Joi.string().required()

    }),
    data: Joi.object().required().keys({
        uid: Joi.string().required(),
        userAgent: Joi.string().required(),
        createdAt: Joi.string().isoDate().required(),
        lastAccessAt: Joi.string().isoDate().required(),
        ip: Joi.string().required()

    }),
}).strict()



module.exports = { loginValidation, sessionValidation}