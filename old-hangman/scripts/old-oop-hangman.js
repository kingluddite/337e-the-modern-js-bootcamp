class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  calculateStatus() {
    const finished = this.word.every(letter =>
      this.guessedletters.includes(letter)
    );

    if (this.remainingguess === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  getStatusMessage() {
    const finished = this.word.every(letter =>
      this.guessedletters.includes(letter)
    );

    if (this.remainingguess === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  getPuzzle() {
    let puzzle = '';

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }
}

// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
// this.status = 'playing'
// }

// Hangman.proptotype.calculateStatus = function() {
//   const finished = this.word.every(letter =>
//     this.guessedletters.includes(letter)
//   );
//
//   if (this.remainingguess === 0) {
//     this.status = 'failed';
//   } else if (finished) {
//     this.status = 'finished';
//   } else {
//     this.status = 'playing';
//   }
// };

// Hangman.prototype.getStatusMessage = function() {
//   if (this.status === 'playing') {
//     return `Guesses left: ${this.remainingGuesses}`;
//   } else if (this.status === 'failed') {
//     return `Nice try! The word was "${this.word.join('')}".`;
//   } else {
//     return `Great work! You guess the word.`;
//   }
// };

//
// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''
//
//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })
//
//     return puzzle
// }

// Hangman.prototype.makeGuess = function(guess) {
//   guess = guess.toLowerCase();
//   const isUnique = !this.guessedLetters.includes(guess);
//   const isBadGuess = !this.word.includes(guess);
//
//   if (this.status !== 'playing') {
//     return;
//   }
//
//   if (isUnique) {
//     this.guessedLetters.push(guess);
//   }
//
//   if (isUnique && isBadGuess) {
//     this.remainingGuesses--;
//   }
//
//   this.calculateStatus();
// };
//
// const game1 = new Hangman('Cat', 2);
// console.log(game1.getPuzzle());
//
// const game2 = new Hangman('New Jersey', 4);
// console.log(game2.getPuzzle());
