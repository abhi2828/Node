const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const express = require('express')

const app = express()

app.use(express.json()) // middleware


app.get('/', async (req,res)=>{
    let api_res = await (await dbConnect()).find().toArray()
    res.send(api_res)
})

app.post('/', async (req,res)=>{
    console.log('req',  req.body)
    const db = await dbConnect()
    const api_res = await db.insertOne([req.body])
     res.send(api_res)
 })

app.post('/many', async (req,res)=>{
   console.log('req',  req.body)
   const db = await dbConnect()
   const api_res = await db.insertMany(req.body)
    res.send(api_res)
})

app.put('/:name', async (req,res)=>{
    console.log('req',   req.body)
    const db = await dbConnect()
    const api_res = await db.updateOne({"name": req.params.name},{$set:req.body})
     res.send(api_res)
 })

app.delete('/:id', async (req,res)=>{
    console.log('req',  req.body)
    const db = await dbConnect()
    const api_res = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    // let res = await db.deleteMany({brand : "micromax"})
     res.send(api_res)
 })

 app.delete('/many', async (req,res)=>{
    console.log('req',  req.body)
    const db = await dbConnect()
    const api_res = await db.deleteMany(req.body)
     res.send(api_res)
 })

app.listen(5000)