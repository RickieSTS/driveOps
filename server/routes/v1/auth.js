const express = require("express");
const router = express.Router();

router.use(express.json());

const sessionChecker = ((req,res,next)=>{
  if(!req.session || !req.session.uid){
    const err = new Error("not logged in")
    err.statusCode = 401
    next(err)
  }
  next();
})

router
  .route("/session")
  .post(async (req, res) => {
   const {email, password} = req.body

   req.session.uid="1234"
   res.json({ok:"success"})

  })
  .get(sessionChecker,async (req, res) => {
  
    
    res.send(req.session)
   
  })
  .delete(async (req, res) => {
   
  });

module.exports = router;