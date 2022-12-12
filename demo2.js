const http = require('http')


const innerFun = (req,res) => { 
    res.write('<h1>Hello, This is abhay </h1>')
    res.end()
 }

http.createServer(innerFun).listen(4500)

