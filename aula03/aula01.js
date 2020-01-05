const getNotes = require('./notes')
const validator = require('validator')

const notes = getNotes()

console.log(notes)
console.log(validator.isEmail('vh(A)vh.com'))