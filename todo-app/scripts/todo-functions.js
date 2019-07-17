'use strict'

// Read Existing Notes from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return (todosJSON) ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
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

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach(todo => {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'Please add Some Todos'
        document.querySelector('#todos').appendChild(emptyMessage)
    }
    
}

// Get the DOM Elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const divEl = document.createElement('div')

    // Create & Append Checkbox
    const todoCheck = document.createElement('input')
    todoCheck.setAttribute('type', 'checkbox')
    todoCheck.checked = todo.completed
    divEl.appendChild(todoCheck)
    todoCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    

    // Create & Append Text
    const todoText = document.createElement('span')
    todoText.textContent = todo.text
    divEl.appendChild(todoText)

    // Setup Container Div Element
    todoEl.classList.add('list-item')
    divEl.classList.add('list-item__container')
    todoEl.appendChild(divEl)

    // Create & Append Button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
   
    return todoEl
}

// Get the DOM Elemenst for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todo(s) left`
    todosLeft.classList.add('list-title')
    return todosLeft
}


const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}