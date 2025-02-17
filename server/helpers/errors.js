class ApiError extends Error {
    constructor(type, message, details, statusCode) {
        super(message),
            this.type = type,
            this.statusCode = statusCode,
            this.details = details
    }
}

module.exports = ApiError