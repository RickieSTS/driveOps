const tryCatch = (endpoint) => async (req, res, next) => {
    console.log("trycatch")
    try {
        await endpoint(req, res)
    } catch (error) {
        next(error)
    }
}

module.exports = tryCatch