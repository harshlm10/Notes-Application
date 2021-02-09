const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder : {
        title: {
            describe : 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe : 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder : {
        title: {
            describe : "Title of the Note",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the Notes',
    handler(){
        console.log(chalk.inverse('\nYour Notes...\n'))
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a Specific Note',
    builder : {
        title: {
            describe : "Title of the Note",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.ReadNote(argv.title)
    }
})

yargs.parse()