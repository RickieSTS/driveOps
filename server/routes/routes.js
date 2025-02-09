var express = require('express');
var router = express.Router();

router.use("/api/v1/auth", require("./auth"))

module.exports = router;