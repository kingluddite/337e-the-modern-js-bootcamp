const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

// const render = () => {
//   // set element to empty string
//   puzzleEl.innerHTML = '';
//   guessesEl.textContent = game1.statusMessage;
//
//   // loop through words
//   for (let i = 0; i < game1.puzzle.length; i++) {
//     // create a span for each iteration of loop
//     const spanEl = document.createElement('span');
//     // add a letter inside each span tag
//     spanEl.textContent = game1.puzzle.charAt(i);
//     // add the span inside the puzzle element
//     puzzleEl.appendChild(spanEl);
//   }
// };

const render = () => {
  // set element to an empty string
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  // split each character into an array
  // loop through and for each letter
  game1.puzzle.split('').forEach(letter => {
    // create a span
    const letterEl = document.createElement('span');
    // add the letter inside the span
    letterEl.textContent = letter;
    // add the span inside the puzzle element
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })
