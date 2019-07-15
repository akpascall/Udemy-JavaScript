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

// STRING METHODS
let name = 'Adam Pascall  '
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.includes('goodone'))
name = name.trim()
console.log(name.length)

// NUMBER METHODS
const num = 123.5436
console.log(num.toFixed(2))

Math.round(num)
Math.floor(num)
Math.ceil(num)

const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min


// DATES
const now = new Date()
console.log(now.toString)
console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of Month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const then = new Date('January 21 2001 6:25:01')
console.log(now.getTime())

const someTime = now.getTime()
const myDate = new Date(someTime)

// MOMENT
const momentNow = moment()
console.log(momentNow.toString())

momentNow.minute(3)
momentNow.add(1, 'year').subtract(20, 'days')
console.log(momentNow.format('MMMM Do, YYYY'))

console.log(momentNow.fromNow())

const nowTimeStamp = momentNow.valueOf()

const nowMom = moment()
nowMom.year(1901).month(1).date(1)
