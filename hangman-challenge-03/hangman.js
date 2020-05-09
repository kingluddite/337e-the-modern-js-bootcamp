const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  // setup new "status" property with intial value of "playing"
  this.status = 'playing';
};

// create method for recalculating status to: "playing", "finished", or "failed"
// we set it to a regular function as we'll need to use 'this'
Hangman.prototype.calculateStatus = function() {
  const finished = this.word.every(letter =>
    this.guessedLetters.includes(letter)
  );

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (finished) {
    // if status is finished the game is over
    this.status = 'finished';
  } else {
    // if they haven't failed or finished they are still playing
    this.status = 'playing';
  }
};

Hangman.prototype.getStatusMessage = function() {
  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    return `Nice try! The word was "${this.word.join('')}".`;
  } else {
    return 'Great work! You guessed the word.';
  }
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  // if the status is anything other than `playing` leave the function
  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }

  // we need to call our new method
  this.calculateStatus();
};

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  // console.log(game1.getPuzzle());
  // console.log(game1.remainingGuesses);
});
