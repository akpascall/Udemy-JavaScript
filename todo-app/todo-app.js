const todos = [{
    text: 'Walk Dog',
    completed: true
}, {
    text: 'Eat Soup',
    completed: false
}, {
    text: 'Drink Water',
    completed: true
}, {
    text: 'Clean House',
    completed: false
}, {
    text: 'Do Stuff',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(todo => {
        const filteredText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const filteredTodo = !todo.completed || !filters.hideCompleted
        return filteredText && filteredTodo
    })
        
    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed 
    })

    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(todosLeft)

    filteredTodos.forEach(todo => {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('click', e => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', e => {
    e.preventDefault()

    todos.push({text: e.target.elements.text.value, completed: false})

    renderTodos(todos, filters)

    e.target.elements.text.value = ''
})

document.querySelector('#filter-todos').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
