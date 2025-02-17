const express = require("express");
const validator = require("../../middlewares/validator");
const { loginValidation } = require("../../helpers/validationSchema");
const authenticate = require("../../middlewares/authenticate");
const tryCatch = require("../../middlewares/tryCatch");
const errorHandler = require("../../middlewares/errorHandler");
const router = express.Router();


router.use(express.json());

router
  .route("/session")
  .post(validator(loginValidation), tryCatch(async (req, res) => {
    const { email, password } = req.body

    req.session.uid = email
    res.status(200).json({ ok: "success" })

  }))
  .get(authenticate, async (req, res) => {
    console.log(("session/get"));


    res.send(req.session)

  })
  .delete(async (req, res) => {

  });

router.use(errorHandler)
module.exports = router;