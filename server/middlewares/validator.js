const Joi = require('joi');
const ApiError = require('../helpers/errors');

const validator = (validationData) => (req, res, next) => {

    const value = validationData.value(req);
    const { error } = validationData.schema.validate(value, { abortEarly: false })

    if (error) {
        
        throw new ApiError(
            validationData.status.message,
            error.message,
            validationData.details || error.details,
            validationData.status.code
        );
    }

    next()
}

module.exports = validator



