const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secret_key"


router.post('/login', (req,res) => {
    console.log(req.body);
    if(req.body.username === "james" && req.body.password === "123") {
       const token = jwt.sign({userId: 1},SECRET_KEY, { expiresIn: 3600 } )
        return res.json({auth: true, token: token});
    }
    res.status(401).end();
    
})

module.exports = router;