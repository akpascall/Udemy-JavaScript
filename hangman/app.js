'use strict'

let game
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset-game').addEventListener('click', startGame)

startGame()
