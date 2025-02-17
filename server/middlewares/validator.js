const Joi = require('joi');
const ApiError = require('../helpers/errors');

const validator = (schema) => (req, res, next) => {

    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        throw new ApiError(error.name, error.message, error.details, 422);
    }
    console.log("validator sucess");
    next()
}

module.exports = validator



