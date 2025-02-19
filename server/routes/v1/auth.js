const express = require("express");
const validator = require("../../middlewares/validator");
const { loginValidation } = require("../../helpers/validationSchema");
const authenticate = require("../../middlewares/authenticate");
const tryCatch = require("../../middlewares/tryCatch");
const errorHandler = require("../../middlewares/errorHandler");
const { date } = require("joi");
const ApiError = require("../../helpers/errors");
const validation = require("../../helpers/validation");
const router = express.Router();


router.use(express.json());

router
  .route("/session")
  .post(validator(validation.login), tryCatch(async (req, res) => {
    const { email, password } = req.body



    req.session.data = {
      uid: email,
      userAgent: req.get('User-Agent'),
      createdAt: new Date().toISOString(),
      lastAccessAt: new Date().toISOString(),
      ip: req.ip ?? "Unavailable"
    }


    res.status(200).json({ ok: "Session created with success" })

  }))
  .get(validator(validation.auth), tryCatch(async (req, res) => {

    req.session.data.lastAccessAt = new Date().toISOString()

    res.send(req.session)

  }))
  .delete(validator(validation.auth), tryCatch(async (req, res) => {
    req.session.destroy((err) => {
      if(err){
        next(err)
      }else{
        res.clearCookie('_driveOps_session');
        res.status(200).json({ ok: "Session destroyed with success" })
      }
    })
  }));

router.use(errorHandler)
module.exports = router;