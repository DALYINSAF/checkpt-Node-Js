const fs=require('fs')
const path=process.argv[2]
const file =fs.readFileSync(path)

console.log(file.toString().split("\n").length-1)