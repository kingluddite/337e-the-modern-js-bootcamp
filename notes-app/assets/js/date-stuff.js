const dateOne = new Date('July 1, 1991 12:00:00');
const dateTwo = new Date('July 1, 1990 12:20:00');

const timestampOne = dateOne.getTime();
const timestampTwo = dateTwo.getTime();

if (timestampOne > timestampTwo) {
  console.log(dateTwo.toString());
} else if (timestampOne < timestampTwo) {
  console.log(dateOne.toString());
} else {
  console.log('timestamps are the same');
}

// const now = new Date();
// const timestamp = now.getTime();
// const newDate = new Date(timestamp);
// console.log(newDate.getFullYear());

// today is 2/13/2020 @ 6:52pm
// console.log(`Year: ${now.getFullYear()}`); // 2020
// console.log(`Month: ${now.getMonth()}`); // 1 (January is 0, December is 11)
// console.log(`Day of month: ${now.getDate()}`); // 13
// console.log(`Hour: ${now.getHours()}`); // 18 (military time)
// console.log(`Minute: ${now.getMinutes()}`); // 50
// console.log(`Second: ${now.getSeconds()}`); // Second 49
