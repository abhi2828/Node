// use setTimeout for breaking or ending response after 10sec in below example

const innerFun = (req,res) => { 
    setTimeout(() => {
    res.write('<h1>Hello, This is abhay </h1>')
    res.end() 
    }, 10000);
 }

http.createServer(innerFun).listen(4500)