const authenticate = ((req, res, next) => {
    if (!req.session || !req.session.uid) {
        next(res.status(400).json({ error: "Not logged in" }))

    }
    next();
})

module.exports = authenticate