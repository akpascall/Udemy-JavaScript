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
