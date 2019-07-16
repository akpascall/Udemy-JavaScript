'use strict'

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
        })

        return puzzle
    }

    makeGuess(guess) {
        if (this.status !== 'playing') {
            return
        }
    
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        } 
    
        this.calculateStatus()
    }

    calculateStatus() {
        if (!this.puzzle.includes('*')) {
            this.status = 'finished'
        } else if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'finished') {
            return 'Great Work, you Guessed the Word'
        } else {
            return `Nice Try, the word was "${this.word.join('')}"`
        }
    }
}