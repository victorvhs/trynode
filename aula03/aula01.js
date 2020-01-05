const getNotes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

// custumize version
yargs.version('1.25')

// Add, remove, read, list
// Create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: function (){
        console.log(chalk.bgGray("Add new notes"))
    }
})
//Create a remove command

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log(chalk.red('Removing a note'))
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function(){
        console.log('This is all yours notes')
    }
})
//Create a read command
yargs.command({
    command:'read',
    describe:' Read a note',
    handler: function(){
        console.log('Read a note ...')
    }
})
console.log(yargs.argv)