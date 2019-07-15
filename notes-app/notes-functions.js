// Read Existing Notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return (notesJSON !== null) ? JSON.parse(notesJSON) : []
}

// Save Notes to local Storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Render Notes to DOM
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        noteEl = generateNoteDOM(note)
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate the DOM Structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')

    // Create & Append Button
    const button = document.createElement('button')
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    button.textContent = 'x'
    noteEl.appendChild(button)

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unkown Note'
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the last edited Message
const generateLastEdited = (timeStamp) => {
    return `Last Edited ${moment(timeStamp).fromNow()}`
}

// Sort Your notes by one of three options 
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}