const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'CRUD')
const filePath = `${dirPath}/testfile.txt`

fs.writeFileSync(filePath,`hi, my name is abhay mishra`)

fs.readFile(filePath,'utf8',(err,file)=>{
    console.log('file', file)
})

fs.appendFile(filePath,` & i'm tryinig to learn nodejs`,(err)=>{
     if(!err)  console.log('file is updated')
})
fs.rename(filePath,`${dirPath}/test.txt`,(err)=>{
    if(!err)  console.log('file name is updated')
})

// fs.unlinkSync(filePath) //this is used to delete any file just pass file path as parameter