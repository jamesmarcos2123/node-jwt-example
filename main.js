const express = require('express')
const login = require('./controller/login_controller')
const user = require('./controller/users_controller')



const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/', login)
app.use('/users', user)

app.listen(5000, () => {
    console.log("Servidor está no ar");
} )
