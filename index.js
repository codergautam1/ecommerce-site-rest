require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const AuthRoute = require('./routes/auth')
const morgan = require('morgan')

const app = express()
mongoose.connect(process.env.MONGO_URL,() => { 
    console.log("database connected!")
})

app.use(express.json())
app.use(morgan('dev'))
app.use('/api/auth',AuthRoute)

app.get("/home",(req,res,next) => {
    res.send("Hello world!")
})

app.listen(process.env.PORT||3300,()=>{
    console.log(`Server is Running at : http://localhost:${process.env.PORT}`)
})