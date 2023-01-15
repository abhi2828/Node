const { MongoClient } = require("mongodb");
const URL = 'mongodb://localhost:27017';

const client = new MongoClient(URL)

const dbName = 'e-com'
const collectionName = 'products'

const dbConnect = async ()=>{
  let connect = await client.connect()
  let db = connect.db(dbName)
  let collection = db.collection(collectionName)
  let res = await collection.find().toArray()
  // const result = await db.find({name : "max 3"}).toArray() // to find spacific data this is called where clause
  console.log(res)
}


dbConnect()