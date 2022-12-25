@ Route-level middlweare :

here we learn how Route Route level middlweare work and how we can achive it

1. we need to import or require express.Router()
2. we want to write code for middlweare internally or externally earlier we create 
internal middlweare now we have created external middlweare in middlweare file 
& require it our index.js pass middleware in use() like below

const filter_request = require('./middleware')

Route.use(filter_request)

3.then we need to apply middleware to url like below

Route.get('/user',(req,res)=>{
  res.send('<h1>welcome to user page</h1>')
})

4. finally connect application with Route

app.use('/',Route)

-------------------------------------------------------

@ difference between application level VS Route level middleware ?

=> application level middleware apply globally on application but Route 
level middleware apply globally as well as individually or group of Route
