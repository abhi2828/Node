const express = require("express")
const app = express()

app.get('',(req,res)=>{
    console.log('req', req.query) // don't understand why we used req.query (query params or query parameters) ??
    res.send('<h1>welcome, this is home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('Hello, this is about page')
})

app.get('/contact',(req,res)=>{
    res.send('Hello, this is contact page')
})

app.get('/help',(req,res)=>{
    res.send('welcome, this is help page')
})

app.listen(5000)