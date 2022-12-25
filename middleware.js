module.exports = filter_request = (req,res,next)=>{
    if(!req.query.age){
      res.send('Please provide age')
    }
    else if(req.query.age < 18 ){
      res.send(`You can't access this page sorry !! ^_^`)
    }
    else next()
  }