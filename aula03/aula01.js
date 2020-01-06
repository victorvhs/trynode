const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

// custumize version
yargs.version('1.25')

// Add, remove, read, list
// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'The note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

//Create a remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'The note title that will be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
    }
})

//Create a read command
yargs.command({
    command:'read',
    describe:' Read a note',
    builder:{
        title :{
            describe:'Title of note you want',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()