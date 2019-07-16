const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach(like => {
        bio += `, ${this.firstName} likes ${like}`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    splitName = fullName.split(' ')
    this.firstName = splitName[0]
    this.lastName = splitName[1]
}

const me = new Person('Andrew', 'Mead', 27, ['stuff', 'things'])

console.log(me)

const me2 = new Person('Bruce', 'Smith', 127)

console.log(me2)
console.log(me2.getBio())
console.log(me.getBio())

// Primatives and Objects
const product = {
    name: 'Influence'
}

console.log(product.hasOwnProperty('name'))
console.log(product.hasOwnProperty('price'))

class ClassPerson {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach(like => {
            bio += `, ${this.firstName} likes ${like}`
        })

    return bio
    }

    set fullName(fullName) {
        const splitName = fullName.split(' ')
        this.firstName = splitName[0]
        this.lastName = splitName[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const myPerson = new ClassPerson('Adam', 'Smith', 2, ['stuff'])

console.log(myPerson.getBio())

class Employee extends ClassPerson {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}.}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends ClassPerson {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        return (this.grade > 70) ? `${this.firstName} is passing the grade` : `${this.firstName} is failing the grade` 
    }

    updateGrade(update) {
        this.grade += update
    }
}

// Getters & Setters

const data = {
    locations: [],

    get location() {
        return this._location
    },

    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = '  Philadelphia'
console.log(data.location)
