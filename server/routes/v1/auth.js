const express = require("express");
const router = express.Router();

router.use(express.json());

const sessionChecker = ((req,res,next)=>{
  if(!req.session || !req.session.uid){
       next(res.status(400).json({error:"Not logged in"}))
      
  }
  next();
})

router
  .route("/session")
  .post(async (req, res) => {
   const {email, password} = req.body

   req.session.uid="1234"
   res.status(200).json({ok:"success"})

  })
  .get(sessionChecker,async (req, res) => {
    console.log(("get"));
    
    
    res.send(req.session)
   
  })
  .delete(async (req, res) => {
   
  });

module.exports = router;