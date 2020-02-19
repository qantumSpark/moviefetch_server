//
if(process.env.NODE_ENV !== "production"){
require("dotenv").config()
console.log("The environement is: " +process.env.NODE_ENV)
}
//
const express = require('express')
const helmet = require('helmet')
//const cors = require('cors')
//const morgan = require('morgan')
const app = express()
//
//app.use(morgan('dev'))
//app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


//
const router = require('./routes')
app.use('/api', require('./routes'))

app.get('/', (req,res) => {
  res.sendFile('index.html')
})
//
const port = process.env.PORT
app.listen(port, console.log("Server is listening on port: "+port))