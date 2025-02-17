const ApiError = require("../helpers/errors")
const fs = require("fs")

const errorHandler = (err, req, res, next) => {

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ error: err })
    }
    console.log(err.message);

    let logStream = fs.createWriteStream('./server.log', { flags: 'a' });
    const consoler = new console.Console(logStream);
    const logEntry = {
        type: err.name,
        statusCode: 500,
        message: err.message,
        timeStamp: new Date().toISOString(),
        details: err.stack
    }
    res.status(500).json({ error: err.message })

}

module.exports = errorHandler