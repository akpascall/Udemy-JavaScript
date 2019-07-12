// Challenge 1 - Variables & Strings
const city = 'Brisbane'
const country = 'Australia'
const location = `${city}, ${country}`

// Challenge 2 - Numbers
const studentScore = 17
const maxScore = 20
const percent = `${(studentScore / maxScore) * 100}%`

// Challenge 3 - Temp Convertor
const fahrenheit = 32
const celcius = (fahrenheit - 32) * 5 / 9
const kelvin = (fahrenheit + 459.67) * 5 / 9

// Challenge 4 - Booleans
const age = 29
const isChild = age <= 7
const isSenior = age >= 65

// Challenge 5 - If Statements
if (isChild) {
    console.log('You get childs price')
}
if (isSenior) {
    console.log('You get seniors price')
}

// Challenge 6 - If/Else Statements
const temp = 64
if (temp <= 32) {
    console.log('It is freezing outside')
} else if (temp >= 110) {
    console.log('It is very hot outside')
} else {
    console.log('Go for it, is nice out')
}

// Challenge 7 - Conditional Operators
const isGuestOneVegan = false
const isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here are our vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here are some vegan and non vegan options')
} else {
    console.log('Here is the menu, eat what you like')
}

// Challenge 8 - Function Basics
const convertFahrToCelcius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9
}

// Challenge 9 - 
const getTip = (total, tipPercent = 0.2) => {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

console.log(getTip(100))

// Challenge 10 - Grade Calc
const getScore = (studentScore, maxScore) => {
    const percent = studentScore / maxScore * 100
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    letterGrade === 'A' || letterGrade === 'F' ? letter = 'an' : letter = 'a' 
    return `You got ${letter} ${letterGrade} (${percent}%)`
}

console.log(getScore(18, 20))
console.log(getScore(16, 20))
console.log(getScore(9, 20))

// Challenge 11 - Object Basics
const person = {
    name: 'Adam',
    age: 29,
    location: 'Brisbane'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

// Challenge 12 - Objects With Functions
const tempConvertor = (fahrenheit) => {
    return {
        fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

// Challenge 13 - Object Refernces
const myAccount = {
    name: 'Adam',
    expenses: 0,
    income: 0
}

const addExpense = (account, amount) => {
    account.expenses += amount
}

const addIncome = (account, amount) => {
    account.income += amount
}

const resetAccount = (account) => {
    account.expenses = 0
    account.income = 0
}

const getAccountSummary = (account) => {
    return `${account.income - account.expenses}`
}

// Challenge 14 - Object Methods
const restuarant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability(partySize) {
        const seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty(partySize) {
        this.guestCount += partySize
    },
    removeParty(partySize) {
        this.guestCount -= partySize
    }
}

// Challenge 15 - String Methods
const isValidPassword = (password) => {
    return password.length >= 8 && !password.includes('password')
}

// Challenge 16 - Number Methods
const makeGuess = (guess) => {
    const min = 1
    const max = 5
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}

// Challenge 17 - Array Basics
const todos = ['Do Thing 1', 'Do Thing 2', 'Do Another Thing', 'One more thing', 'And One More']

console.log(`You have ${todos.length} todos`)
console.log(todos[0])
console.log(todos[todos.length - 2])

// Challenge 18 - Array Methods
todos.splice(2, 1)
todos.push('Do this new item')
todos.shift()

// Challenge 19 - Looping Over Arrays
todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`)
})

// Challenge 20 - The For Loop
for (let index = 0; index < todos.length; index++) {
    console.log(`${index + 1}. ${todos[index]}`)
}

// Challenge 21 - Searching Arays
const todosObject = [{
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

const deleteTodo = (todos, todoText) => {
    const index = todos.findIndex((todo) => {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index >= 0) {
        todos.splice(index, 1)
    }
}

deleteTodo(todosObject, 'Walk dog')
console.log(todosObject)

// Challenge 22 - Filter Arrays
const getThingsToDo = (todos) => {
    return todos.filter((todo) => {
        return !todo.completed
    })
}

// Challenge 23 - Sort Arrays
const sortTodos = (todos) => {
    todos.sort((a, b) => {
        if (a.completed < b.completed) {
            return -1
        } else if (a.completed > b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

// Challenge 24 - Expense Tracker
const expenseAccount = {
    name: 'Adam',
    expenses: [],
    income: [],
    addExpense(description, amount) {
        this.expenses.push({description, amount})
    },
    addIncome(description, amount) {
        this.income.push({description, amount})
    },
    resetAccount() {
        this.income = []
        this.expenses = []
    },
    getAccountSummary() {
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach((expense) => {
            totalExpenses += expense.amount
        })
        this.income.forEach((inc) => {
            totalIncome += inc.amount
        })
        return `${this.name} has $${totalIncome - totalExpenses}, $${totalIncome} in income & $${totalExpenses} in expenses`
    }
}

expenseAccount.addExpense('Rent', 150)
expenseAccount.addExpense('Coffee', 2)
expenseAccount.addIncome('Salary', 2000)
console.log(expenseAccount.getAccountSummary())
expenseAccount.resetAccount()
console.log(expenseAccount.getAccountSummary())