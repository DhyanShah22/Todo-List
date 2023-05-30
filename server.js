const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./Routes/todo-routes')

require('dotenv').config()
const logger  = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/todolist', todoRoutes)

mongoose.connect(process.env.MONG_URI)
    .then( () => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to Db and Listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
 

    