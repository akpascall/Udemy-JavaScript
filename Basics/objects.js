// Object Basics
const myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 324
}

myBook.title = 'Animal Farm'

// Objects With Functions
const otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 734
}

const bookSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(bookSummary(myBook).summary)
console.log(bookSummary(otherBook).pageCountSummary)

// Object References
const myAccount = {
    name: 'Adam',
    expenses: 0,
    income: 0
}

const addExpense = (account, amount) => {
    account.expenses += amount
}

// Object Methods
const restuarant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability(partySize) {
        const seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

console.log(restuarant.checkAvailability(4))