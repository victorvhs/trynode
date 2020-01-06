const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
        const notes = loadNotes()
        const duplicateNote = notes.find((note) => note.title === title)
        if(!duplicateNote){
            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(chalk.greenBright.inverse('New note save'))
        } else {
            console.log(chalk.red.bgYellow.bold("No duplicate title"))
        }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > noteToKeep.length){
        saveNotes(noteToKeep)
        console.log(chalk.greenBright.inverse("Delete note: "+title))
    } else {
        console.log(chalk.red.inverse.bold('No note found'))
    }
}

const listNotes = () => {
    console.log(chalk.blueBright.inverse('Your notes are:'))
    const notes = loadNotes()
    notes.forEach( note => {
        console.log(chalk.yellow('* ')+note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectNote = notes.find((note) => note.title === title)
    if(selectNote){
        console.log(chalk.bgGray.bold.cyanBright(selectNote.title))
        console.log(selectNote.body)
    }else {
        console.error(chalk.redBright.bgYellow.bold('Note not found'))
    }

}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
    
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
}