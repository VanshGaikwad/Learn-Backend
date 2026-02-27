const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();
// POST register api
router.post("/register",authController.registerUser)

router.get("/test",(req,res)=>{
    console.log("Cookies",req.cookies)
    res.json({
        message:"Test route",
        cookie: req.cookies
    })
})



module.exports = router;
