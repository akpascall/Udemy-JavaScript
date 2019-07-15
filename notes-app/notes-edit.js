'use strict'

const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find(note => {
    return note.id === noteId
})

if (!note) {
    location.assign('/index.html')
}

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteUpdate = document.querySelector('#updated-at')
const noteButton = document.querySelector('#remove-note')

// Fill Title and body with notes existing data
noteTitle.value = note.title
noteBody.value = note.body
noteUpdate.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', e => {
    note.title = e.target.value
    noteUpdate.textContent = generateLastEdited(note.updatedAt)
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

noteBody.addEventListener('input', e => {
    note.body = e.target.value
    noteUpdate.textContent = generateLastEdited(note.updatedAt)
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

noteButton.addEventListener('click', () => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find(note => {
            return note.id === noteId
        })
        
        if (!note) {
            location.assign('/index.html')
        }
    
        noteTitle.value = note.title
        noteBody.value = note.body
        noteUpdate.textContent = generateLastEdited(note.updatedAt)
    }
})