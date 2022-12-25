const express = require("express")
const app = express()

const filter_request = (req,res,next)=>{
  if(!req.query.age){
    res.send('Please provide age')
  }
  else if(req.query.age < 18 ){
    res.send(`You can't access this page sorry !! ^_^`)
  }
  else next()
}
app.use(filter_request)

app.get('/',(req,res)=>{
  res.send('<h1>welcome to home page</h1>')
})

app.get('/about',(req,res)=>{
  res.send('<h1>welcome to about page</h1>')
})

app.listen(5000)