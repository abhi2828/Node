const fs = require("fs")
let input = process.argv
console.log('input', input)
input[2] == 'add' ? fs.writeFileSync(input[3],input[4]) : input[2] == 'remove' ? fs.unlinkSync(input[3]) : console.log('invalid input')

// input:

// 1.  node .\index.js add input.txt 'file added again'
// 2.  node .\index.js remove input.txt
// 3.  node .\index.js input.txt 'file added again'