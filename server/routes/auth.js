const express = require("express");
const router = express.Router();

router.use(express.json());

router
  .route("/session")
  .post(async (req, res) => {
    
  })
  .get((req, res) => {
   
   
  })
  .delete(async (req, res) => {
   
  });

module.exports = router;