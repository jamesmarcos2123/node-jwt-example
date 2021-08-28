const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secret_key"



router.get('/' ,verifyToken,(req,res) => {
    
    res.json([{userId:1 , username:"james", password:"123" }])
})


function verifyToken(req,res,next) {
    const token = req.headers['authorization']
    jwt.verify(token,SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).end();
        }
        req.userId = decoded.userId;
        next();
    })
}

module.exports = router;