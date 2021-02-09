const fs = require('fs')
const chalk = require('chalk')
const saveNote = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter( note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNote(notes)
        console.log(chalk.green.bold('New Note Added!!'))
    }
    else {
        console.log(chalk.red.bold('Note Title ALready Exists!!'))
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const allNotes = notes.filter(note => note.title !== title)
    if (allNotes.length === notes.length)
        console.log(chalk.red.bold('The Note Title Does Not Exist'))
    else {
        saveNote(allNotes)
        console.log(chalk.green.bold('Note Deleted Successfully'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0)
        console.log(chalk.red.bold('No Notes Exists'))
    else {
        notes.forEach(note => {
            console.log(note)
        })
    }
}

const ReadNote = title => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)
    if (noteToRead) {
        console.log(chalk.blue.bold(noteToRead.title))
        console.log(chalk.bold.bgGrey(noteToRead.body))
    }
    else
        console.log(chalk.red.bold("Note Not Found!!"))
}

module.exports = {
    addNote, removeNote, listNotes, ReadNote
}