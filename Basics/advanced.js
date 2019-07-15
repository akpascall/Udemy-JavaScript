// Arrow Functions
const square = (num) => {
    return num * num
}

const betterSquare = num => num * num

const people = [{
    people: 'Andrew',
    age: 27
}, {
    people: 'Dave',
    age: 270
}, {
    people: 'Bruce',
    age: 22
}]

const under30 = people.filter(person => person.age < 30)
const aged20 = people.find(person => person.age === 22)

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

// Ternary Operators
const age = 28

const message = age >= 21 ? 'You can Vote' : 'You cannot Vote'

const showPage = () => ('Showing the Page')
const showErrorPage = () => ('Showing the Error Page')

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['tyler', 'brice']

team.length <= 4 && team.length > 0 ? `Team size: ${team.length}` : 'Not correct team size'

// Truthy & Falsy
const products = []
const product = products[0]

if (product) {
    console.log('product found')
} else {
    console.log('Product not found')
}

// Type Cooercian
console.log('5' + 5)    // will convert 2nd 5 to string
console.log('5' - 5)    // will convert 1st 5 to number
console.log('5' == 5)   // if using == instead of === will come back true

console.log(typeof 123)
console.log(typeof '5')

// Try Catch Staetments
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(true)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
    console.log(e.message)
}

// Should throw errors first so code block doesnt run unneccesarily
const getTips = (amount) => {
    if (typeof amount !== 'number') {
        throw Error('Argument must be a number')
    } 
    return amount * .25
}

// Strict Mode
const processData = () => {
    data = '1235'
}

processData()
console.log(data) // without strictmode will create data (leaked global)
// with 'use strict' will cause program to crash