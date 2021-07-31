const fs = require("fs")
const { brotliDecompress } = require("zlib")

// fs.readFile('index.js','utf8', (err, data) =>{
//     console.log(data);
// })

var a = fs.readFileSync("this.txt")
console.log(a.toString())

console.log("finshed")