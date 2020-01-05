const fs = require('fs')
// const book = {
//     title:'Smile',
//     author:'Reis vh'
// }
// const JSONBook = JSON.stringify(book)
// fs.writeFileSync('1-json.json',JSONBook)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Victor"
data.age = "28"

const newdataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',newdataJSON)
