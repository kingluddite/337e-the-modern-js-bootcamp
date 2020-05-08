const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat Power', 2);
// const game1 = new Hangman(puzzle, 2);
console.log(game1);
puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle('4').then(
  puzzle => {
    // Promise gets resolved
    console.log(puzzle);
  },
  err => {
    // Promise gets rejected
    console.log(`Error: ${err}`);
  }
);

getCountry('MX').then(
  country => {
    console.log(country.name);
  },
  err => {
    console.log(`This is the error: ${err}`);
  }
);

getCountry('US').then(
  country => {
    console.log(country.name);
  },
  err => {
    console.log(`The error: ${err}`);
  }
);
