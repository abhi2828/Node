const http = require('http');
const userdetails = require('./myApi/userdetails')
// let userdetails=[
//     {
//         fname:'abhay',
//         lname:'mishra',
//         city:'ulhasnagar',
//         mobile:'8828688183',
//         age:'26'
//     },
//     {
//         fname:'ajay',
//         lname:'mishra',
//         city:'ulhasnagar',
//         mobile:'844689881',
//         age:'28'
//     },
//     {
//         fname:'shriyansh',
//         lname:'tiwari',
//         city:'ulhasnagar',
//         mobile:'8149337875',
//         age:'17'
//     }
// ]

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(userdetails))
    res.end()
}).listen(8000)