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

getPuzzle('4', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

getCountry('MX', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Country Name: ${country.name}`);
  }
});

getCountry('US', (error, country) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Country Name: ${country.name}`);
  }
});