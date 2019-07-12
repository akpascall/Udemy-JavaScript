notes = [{
    title: 'My Next Trip',
    body: 'I Would like to go to Spain'
}, {
    title: 'Habits to Work on',
    body: 'Exercise, eating a bit better'
}, {
    title: 'Office Modifications',
    body: 'Get a new chair'
}]

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    e.target.textContent = 'Sup'
})

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e.target.value)
})