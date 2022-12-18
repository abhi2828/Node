const fs = require("fs")
let input = process.argv
console.log('input', input)
input[2] == 'add' ? fs.writeFileSync(input[3],input[4]) : input[2] == 'remove' ? fs.unlinkSync(input[3]) : console.log('invalid input')

// input:

// 1.  node .\index.js add input.txt 'file added again' 
// :=> this will create file input.txt with text 'file added again'
// 2.  node .\index.js remove input.txt
// :=> this will remove file
// 3.  node .\index.js input.txt 'file added again'
// :=> this will show check if file input.txt exist