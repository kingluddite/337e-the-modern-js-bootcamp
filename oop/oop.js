// before
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 55,
//   getBio() {
//     return `${this.firstName} is ${this.age}`;
//   },
// };
//
// const bio = person.getBio();
//
// console.log(bio);

const husband = new Person('John', 'Doe', 55);
const wife = new Person('Jane', 'Doe', 50);

const husbandBio = husband.getBio();
const wifeBio = wife.getBio();

console.log(husbandBio);
console.log(wifeBio);
