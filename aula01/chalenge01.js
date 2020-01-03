const fs = require('fs')
let msg = "\n\n ####################\n\t eu sou a continuação da msg"
try{
    fs.appendFileSync('notes.txt',msg)
    console.log("Mensagem anexada com sucesso")
}
catch (err){
    console.error("Impossovil gravar")

}