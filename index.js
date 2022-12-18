const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'/files')

console.log('dirPath', dirPath)
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/testfile${i}.txt`,`this is content for file testfile${i}`)    
}

fs.readdir(dirPath,(err,files)=>{
    files.forEach(file => {
        console.log('file', file)
    });
})