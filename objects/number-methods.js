let num = 103.9343434;

console.log(num.toFixed(2));

// round
console.log(Math.round(num));

// round up
console.log(Math.ceil(num));

// round down
console.log(Math.floor(num));

// generate a random number
// let max = 100;
// let randomNumber = Math.floor(Math.random() * Math.floor(max));
// console.log(randomNumber);

console.log('***Random Number***');
let min = 20;
let max = 30;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge
console.log('###### Challenge *******');
// write a function
// takes in one argument (single guess)
// it will generate a random number in a given range and determine if their guess was correct
// guess between 1 and 5
//   return true if correct
//   return false if not correct
// usage will look like this:
//   console.log(makeGuess(1));
// test program several times to see if you get true and false returned

// guess function
let makeGuess = function(num) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === randomNum;
};

console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));
