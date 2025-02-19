const ApiError = require("../helpers/errors");
const { sessionValidation } = require("../helpers/validationSchema");

const authenticate = ((req, res, next) => {


    const { error } = sessionValidation.validate(req.session, { abortEarly: false })
    console.log(error);
    
    if (error) {
        throw new ApiError("AuthenticationError", error.message, "Session not created", 403);
    }
    console.log("vauthentication sucess");
    next()


    //return res.status(400).json({ error: "Not logged in" })


    //next();
})

module.exports = authenticate