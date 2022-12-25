const express = require("express")
const app = express()
const Route = express.Router() // we import Router() becz we want to apply middleare at Route level
const filter_request = require('./middleware')

Route.use(filter_request) // we use Route insted of app becz we want to apply middleare at Route level only &
                          // we use Route insed of app for which we want to apply Route  

app.get('/',(req,res)=>{
  res.send('<h1>welcome to home page</h1>')
})

Route.get('/about',(req,res)=>{
  res.send('<h1>welcome to about page</h1>')
})

Route.get('/user',(req,res)=>{
  res.send('<h1>welcome to user page</h1>')
})

app.use('/',Route)  // here we want to connect our rout with our application 

app.listen(5000)