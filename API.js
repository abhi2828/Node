const express = require('express')
const dbconnect = require('./mongodb')
const app = express()

app.get('/',(req,res)=>{
    res.send({name:'abhay'})
})

app.listen(5000)