const square = num => {
  return num * num;
};

const squareLong = num => num * num;

console.log(square(5)); // 25

// array of people
const people = [
  {
    name: 'Manny',
    age: 18,
  },
  {
    name: 'Moe',
    age: 21,
  },
  {
    name: 'Jack',
    age: 22,
  },
];

// const twentyOneOrOlder = people.filter(function(person) {
//   return person.age >= 21;
// });

const twentyOneOrOlder = people.filter(person => person.age >= 21);
console.log(twentyOneOrOlder);

const twentyTwo = people.filter(person => person.age === 22);
console.log(twentyTwo);
