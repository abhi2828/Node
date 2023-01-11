const dbconnect = require('./mongodb')

const deletefun = async ()=>{
let db = await dbconnect()
let res = await db.deleteMany({brand : "micromax"})
console.log(res,res.acknowledged ?'data deleted' : 'unable to delete data');
}

deletefun() 