const { MongoClient } = require("mongodb");
const URL = 'mongodb://localhost:27017';

const client = new MongoClient(URL)

const dbName = 'e-com'
const collectionName = 'products'

const dbconnect = async ()=>{
  let connect = await client.connect()
  let db = connect.db(dbName)
  return db.collection(collectionName) 
}
module.exports = dbconnect