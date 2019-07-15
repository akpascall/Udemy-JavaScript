// Read Existing Notes from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    return (todosJSON !== null) ? JSON.parse(todosJSON) : []
}

// Save Notes to local Storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render Todos to the DOM
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

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(todo => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM Elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')

    // Create & Append Checkbox
    const todoCheck = document.createElement('input')
    todoCheck.setAttribute('type', 'checkbox')
    todoCheck.checked = todo.completed
    todoCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoEl.appendChild(todoCheck)

    // Create & Append Text
    const todoText = document.createElement('span')
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Create & Append Button
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
   
    return todoEl
}

// Get the DOM Elemenst for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left`
    return todosLeft
}


const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find(todo => {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}