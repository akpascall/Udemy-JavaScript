'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('click', e => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', e => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text, 
            completed: false
        })
        
        saveTodos(todos)

        renderTodos(todos, filters)

        e.target.elements.text.value = ''   
    }
})

document.querySelector('#filter-todos').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
