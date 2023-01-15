const dbConnect = require('./mongodb')

const update = async ()=>{
let db = await dbConnect()
let res = await db.updateOne(
    {name:"iphone pro"},{
         $set:{
            name : "fly",
            price: 2000,
            brand : "jio",
            category:"mobile",
            country:"india",
        }}
    )
console.log('res',res);
}

update()