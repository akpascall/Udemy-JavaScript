// VARIABLES & STRINGS
const firstName = 'Adam'
const lastName = 'Pascall'
const fullName = `${firstName} ${lastName}`

// NUMBERS
const age = 29
const dogYears = (age + 1) / 7

// BOOLEANS
const temp = 40
const isFreezing = temp <= 32

// IF STATEMENTS
if (isFreezing) {
    console.log('It is freezing out')
}
if (temp >= 110) {
    console.log('It is way to hot out')
}

const isAccountedLocked = true
const userRole = 'Admin'

if (isAccountedLocked) {
    console.log('Account is Locked')
} else if (userRole === 'Admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// CONDITIONAL OPERATORS
if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('It is meh out, do what you like')
}