const fs =  require('fs')
let text = "Eu sou um teste de exemplo :)\n"
fs.writeFileSync('notes.txt',text)
console.log("Escrito com sucesso")