// Function Basics
const greetUser = () => {
    console.log('Hello')
}

greetUser()

const square = (num) => {
    return num * num
}

console.log(square(9))

// Multiple Arguments
const add = (a, b, c) => {
    return a + b + c
}

console.log(add(3, 6, 8))

const getScoreText = (name = 'Anon', score = 0) => {
    return `Name: ${name} - Score: ${score}`
}

console.log(getScoreText('Bruce', 109))
console.log(getScoreText('Adam'))
console.log(getScoreText(undefined, 32))