const dbConnect = require('./mongodb')

const deletefun = async ()=>{
let db = await dbConnect()
let res = await db.deleteMany({brand : "micromax"})     // to delete many record
// let res = await db.deleteOne({brand : "micromax"})  // to delete 1 record
console.log(res,res.acknowledged ?'data deleted' : 'unable to delete data');
}

deletefun() 