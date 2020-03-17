const Hangman = function(word, numGuess) {
  // make word argument lowercase and split each character into an array of strings
  this.word = word.toLowerCase().split('');
  // store guessed letters (we simulate a guessed letter)
  this.guessedLetters = ['c'];
  this.numGuess = numGuess;
};

// return '*' for each letter and ' ' for each space
Hangman.prototype.getWordPuzzle = function() {
  // new array to store puzzle letters
  let puzzleArr = [];
  // loop through each letter in word array
  this.word.forEach(letter => {
    // check for spaces
    if (letter === ' ') {
      puzzleArr.push(' ');
      // check for guess letters
    } else if (this.guessedLetters.includes(letter)) {
      // push the guessed letter into puzzle
      puzzleArr.push(letter);
    } else {
      // not guessed yet so push an asterisk
      puzzleArr.push('*');
    }
  });
  // take array of string characters and join them as one string
  return puzzleArr.join('');
};

const gameOne = new Hangman('CAT', 10);
const gameOnePuzzle = gameOne.getWordPuzzle();
console.log(gameOnePuzzle);
const gameTwo = new Hangman('dog catcher', 5);
const gameTwoPuzzle = gameTwo.getWordPuzzle();
console.log(gameTwoPuzzle);
// console.log(gameOne.getWordPuzzle());
console.log(gameTwo);
