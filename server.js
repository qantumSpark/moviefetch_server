//
if(process.env.NODE_ENV !== "production"){
require("dotenv").config()
console.log(process.env.NODE_ENV)
}
//
const express = require('express')
const helmet = require('helmet')
const app = express()
//
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
//
app.get('/api', require('./routes'))

app.get('/', (req,res) => {
  res.sendFile('index.html')
})
//
const port = process.env.PORT
app.listen(port, console.log("Server is listening on port: "+port))