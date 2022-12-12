const http = require('http') // import http module to handle req and res 

http.createServer( (req,res) => { 
    res.write('Hello, This is abhay') // to get the output on browser
    res.end() // to end response else it will run infinitely
 }).listen(4500)

