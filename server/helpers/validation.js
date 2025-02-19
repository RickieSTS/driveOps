const status = require("./status");
const { loginValidation, sessionValidation } = require("./validationSchema");

const validation = {
    login: {
        schema: loginValidation,
        value: (req) => req.body,
        status: status[422],
        
    },
    auth:{
        schema: sessionValidation,
        value: (req) => req.session,
        status: status[403],
        details: "Session not found."

    }
}



module.exports = validation