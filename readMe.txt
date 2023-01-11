+{  name:'note 11T',
  price:20000,
  brand:'redme',
  category:'mobile'
}

@ how to connect mongodb ?
=> 
steps:
1.import mongoClient from mongodb 
const {mongoClient} = require('mongodb');

2.make ur application aware of the path of mongodb i.e need to store path 
=> const url = 'mongodb://localhost:27017'

3.pass the url to mongoClient() so tht mongodb able to understand tht we need to fetch the data from where 
=> const client  = new mongoClient(url)

4.now to we have everything available so now we can connect to our mongodb using connect()
we will create a function and connect to mongodb or client 

async function getData() {
  let connect = await client.connect();
  } ]i[\7/-]

5.now we are connect to mongodb but now we have to connect to our db 'e-com' for wh.0ich we will use 
db() and pass db name in it like below.

 let db = connect.db('e-com')
            ||  complete function is written below
 +\
 ';lkjhgfdx- + 2QAZ-+       \/

async function getData() {
  let connect = await client.connect();
   let db = connect.db('e-com')
  }

6. now we are connect to db but now we have to connect to our collection (we can call it table for understanding table) 
'products' for which we will use collection() and pass collection name in it like below.

 let collection = db.collection('products')
            ||  complete function is written below
            \/

async function getData() {
    let connect = await client.connect();
    let db = connect.db('e-com')
    let collection = db.collection('products')
    let res = await collection.find({}).toArray()
      console.log('res', res)
  }

  getData()