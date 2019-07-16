
const game = new Hangman('Bruce Man', 4)

const puzzleEl = document.querySelector('#puzzle')
puzzleEl.textContent = game.puzzle

const guessesEl = document.querySelector('#guesses')
guessesEl.textContent = game.statusMessage

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
})