const ApiError = require("../helpers/errors")
const fs = require("fs")

const errorHandler = (err, req, res, next) => {

    if (err instanceof ApiError) {
        
        
        return res.status(err.statusCode).json({ error: err })
    }

    console.log(err.stack);

    let logStream = fs.createWriteStream('./server.log', { flags: 'a' });
    const consoler = new console.Console(logStream);
    const logEntry = {
        type: err.name || "No type",
        statusCode: 500,
        message: err.message || "No message",
        timeStamp: new Date().toISOString(),
        details: err.stack || "No stack"
    }
    consoler.log(logEntry)
    logStream.end()
    return res.status(500).json({ error: err.message })

}

module.exports = errorHandler