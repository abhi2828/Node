const express = require("express")
const path = require("path")

const app = express()
const publicPath = path.join(__dirname,'public')
// console.log(publicPath)

// app.use(express.static(publicPath)) // this is used to create static pages


app.set("view engine","ejs")
// for removing extensions like .html from URL in html or any page we follow bellow methods
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/profile',(req,res)=>{
    const data = {
        name:"abhay",
        email:"abhay@test.com",
        city:"Ulhasnagar"
    }
    res.render(`profile`,{data})
})

// if user don't enter proper URL so, user will redirect to index page
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)  
})

app.listen(5000)