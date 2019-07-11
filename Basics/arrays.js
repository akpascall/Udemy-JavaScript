// Array Basics
const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

console.log(notes.length)
console.log(notes[notes.length - 1])

// Array Methods
notes.push('Item to add to end of array')
notes.pop() // removes last item

notes.unshift('Item to add to start of array')
notes.shift() // removes first item

// array.splice(index of where to start, number of items to remove, item to add)
notes.splice(0, 1, 'removed first item and replaced with this item')

notes[0] = 'Reassign the first item with this item'

// Looping Over Arrays
notes.forEach((note) => {
    console.log(note)
})

// For Loop
for (let index = 0; index < notes.length; index++) {
    console.log(`${index + 1}. ${notes[index]}`)
}

// Filtering Arrays
notesObject = [{
    title: 'My Next Trip',
    body: 'I Would like to go to Spain'
}, {
    title: 'Habits to Work on',
    body: 'Exercise, eating a bit better'
}, {
    title: 'Office Modifications',
    body: 'Get a new chair'
}]

const findNote = (notes, noteTitle) => {
    return notes.find((note) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })    
}

const filterNotes = (notes, searchText) => {
    return notes.filter((note) => {
        const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortArrays = (notes) => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}