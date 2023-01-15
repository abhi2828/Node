const dbConnect = require('./mongodb')

let insertData =
 [
    {
        name : "max 2",
        price: 13000,
        brand : "micromax",
        category:"mobile"
    },
    {
        name : "max 2",
        price: 13000,
        brand : "micromax",
        category:"mobile"
    },
    {
        name:"M-30",
        price:15000,
        brand:"samsung",
        category:"mobile"
      },
      {
        name:"M-40",
        price:25000,
        brand:"samsung",
        category:"mobile"
      },
      {
        name:"iphone 13pro max",
        price:80000,
        brand:"apple",
        category:"mobile"
      }
]

const insert = async ()=>{
    const db = await dbConnect()
    const res = await db.insertMany(insertData)
console.log(res,res.acknowledged ?'data inserted' : 'unable to insert data');
}

insert()