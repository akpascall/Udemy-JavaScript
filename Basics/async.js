const countryCode = 'US'

const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', e => {
    if (e.target.readyState == 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responesText)
        const country = data.find(country => country.alpha2Code === countryCode)
        console.log(country)
    }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()

// Closures
const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage()
}

const myPrintMessage = myFunction()
myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count++
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tenPercent = createTipper(.10)
const twentyPercent = createTipper(.20)
const thirtyPercent = createTipper(.30)

console.log(thirtyPercent(100))
console.log(twentyPercent(100))

// Promises
const getDataPromise = data => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the data: ' + data)
        reject('This is the promise error')
    }, 2000)
})


const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

// Fetch API
fetch('url').then(response => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch data')
    }
}).then(data => {
    console.log(data.puzzle)
}).catch(error => {
    console.log(error)
})

// ASYNC/AWAIT
const processData = async () => {
    const data = await getDataPromise('2')
    console.log(data)
}

processData().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

const getPuzzle = (wordCount = 2) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then(data => {
        return data.puzzle
    })
}